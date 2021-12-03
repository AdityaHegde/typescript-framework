import {Route} from "./Route";
import {Request, Response, Router} from "express";
import {validateRecord} from "../validation/validateRecord";
import {Log} from "../logging/LoggerBase";
import { JsonApiSanitizer } from "./JsonApiSanitizer";
import {RouteFactory} from "./RouteFactory";
import {DataStoreModel} from "../datastore/DataStoreModel";
import {Authentication} from "../authentication/Authentication";
import {RoutesConfig} from "./RoutesConfig";
import {BaseType, ModelNameMap, ModelSelectFieldType, RelationType, UserModel} from "../../models";
import {getQueryString} from "../../ui";

export type LinksType = {
  [link in string]: string
}
export type JSONRecordType = {
  id: string;
  type: string;
  attributes: any;
  relations?: any;
  links?: LinksType;
}
export type JSONResponse = {
  data?: Array<JSONRecordType> | JSONRecordType;
  errors?: Array<any>;
  links?: LinksType;
}

const PAGINATION_KEY = "fromId";
const PAGE_SIZE_KEY = "pageSize";

@Log
export class JsonApiRoute extends Route {
  public jsonApiSanitizer: JsonApiSanitizer;

  private apiIdPath: string;

  constructor(model: typeof BaseType, routesConfig: RoutesConfig, routeFactory: RouteFactory,
              dataStoreModel: DataStoreModel, authentication: Authentication, basePath: string) {
    super(model, routesConfig, routeFactory, dataStoreModel, authentication, basePath);
    // as of now there is no need to customize this hence not taking it through constructor
    this.jsonApiSanitizer = new JsonApiSanitizer(model, routeFactory);
  }

  public async init(router: Router): Promise<void> {
    this.apiPath = this.getApiPath();
    this.apiIdPath = `${this.apiPath}:id`;

    // We are not creating a sub router here because path params are not passed over from sub router's path to handlers
    // If express allows for a way to fix this we can move to sub routers
    this.registerReadRoutes(router);
    this.registerWriteRoutes(router);

    this.logger.info(`Adding a route for ${this.model.metadata.modelName} at ${this.apiPath}`);
  }

  public sanitizeRecord(record: any, params: any, req?: Request, read = false): any {
    return this.jsonApiSanitizer.sanitizeRecord(record, params, req, read);
  }

  public convertToJSON(record: any): JSONRecordType {
    return this.jsonApiSanitizer.convertToJSON(record);
  }

  protected sanitizeQuery(search: any, params: any) {
    return this.jsonApiSanitizer.sanitizeQuery(search, params);
  }

  private registerReadRoutes(baseRouter: Router) {
    const getManyHandler = async (req: Request, res: Response) => {
      this.logger.debug(`Have query request. ` +
        `modelName=${this.model.metadata.modelName} ` +
        `query=${JSON.stringify(req.query)} params=${JSON.stringify(req.params)}`);
      await this.handle(res, req, () => {
        return this.dataStoreModel.query(this.sanitizeQuery(req.query, req.params), {
          ...(req.query[PAGINATION_KEY] ? {fromId: req.query[PAGINATION_KEY].toString()}: {}),
          limit: this.getLimit(req),
        });
      });
    };
    const getSingleHandler = async (req: Request, res: Response) => {
      this.logger.debug(`Have get single request. ` +
        `modelName=${this.model.metadata.modelName} id=${req.params.id}`);
      await this.handle(res, req, () => {
        return this.dataStoreModel.getById(req.params.id);
      });
    };

    if (this.model.serverMetadata.readRole === undefined) {
      baseRouter.get(this.apiPath, getManyHandler);
      baseRouter.get(this.apiIdPath, getSingleHandler);
    } else {
      baseRouter.get(this.apiPath, this.authentication.restrict(this.model.serverMetadata.readRole), getManyHandler);
      baseRouter.get(this.apiIdPath, this.authentication.restrict(this.model.serverMetadata.readRole), getSingleHandler);
    }
  }

  private registerWriteRoutes(baseRouter: Router) {
    const createHandler = async (req: Request, res: Response) => {
      this.logger.debug(`Have create request. ` +
        `modelName=${this.model.metadata.modelName} ` +
        `request=${JSON.stringify(req.body)}`);
      await this.handle(res, req, () => {
        return this.createOrUpdateJson(req.body.data, req);
      });
    };

    const updateHandler = async (req: Request, res: Response) => {
      this.logger.debug(`Have update request. ` +
        `modelName=${this.model.metadata.modelName} id=${req.params.id} ` +
        `request=${JSON.stringify(req.body)}`);
      await this.handle(res, req, async () => {
        return this.createOrUpdateJson(req.body.data, req);
      });
    };

    const deleteHandler = async (req: Request, res: Response) => {
      this.logger.debug(`Have delete request. ` +
        `modelName=${this.model.metadata.modelName} id=${req.params.id}`);
      await this.handle(res, req, async () => {
        await this.validateOwner((req as any).user, req.params.id);
        return this.dataStoreModel.delete(req.params.id, {
          type: this.model.metadata.modelName,
          attributes: {},
        });
      });
    };

    if (this.model.serverMetadata.writeRole === undefined) {
      baseRouter.post(this.apiPath, createHandler);
      baseRouter.put(this.apiIdPath, updateHandler);
      baseRouter.delete(this.apiIdPath, deleteHandler);
    } else {
      baseRouter.post(this.apiPath, this.authentication.restrict(this.model.serverMetadata.writeRole), createHandler);
      baseRouter.put(this.apiIdPath, this.authentication.restrict(this.model.serverMetadata.writeRole), updateHandler);
      baseRouter.delete(this.apiIdPath, this.authentication.restrict(this.model.serverMetadata.writeRole), deleteHandler);
    }
  }

  private async handle(
    res: Response, req: Request, operation: () => Promise<any>,
  ) {
    try {
      const resp = await operation();
      res.status(200).send(this.getResponsePayload(req, resp));
    } catch (err) {
      this.logger.error(err.stack);
      res.status(500).send({
        errors: [err.toJSON ? err.toJSON() : {
          title: err.message,
        }],
      });
    }
  }

  private getApiPath() {
    const parts = [];
    if (this.basePath) {
      parts.push(this.basePath);
    }
    parts.push(...this.model.metadata.parentKeys.map(parentKey =>
      `${ModelNameMap.get(parentKey.ref).metadata.apiPath}/:${parentKey.field}`));
    parts.push(this.model.metadata.apiPath);
    return `/${parts.join("/")}/`;
  }

  private async createOrUpdateJson(jsonRecord: JSONRecordType, req: Request) {
    if (req.params.id) {
      jsonRecord.id = req.params.id;
    }

    if (jsonRecord.id) {
      await this.validateOwner((req as any).user, jsonRecord.id);
    }

    let returnRecord;

    const record = this.sanitizeRecord(jsonRecord.attributes, req.params, req);
    validateRecord(this.model, record);
    // if it is a fresh record create it so that we get the id generated
    if (!jsonRecord.id) {
      returnRecord = await this.dataStoreModel.create(record);
      jsonRecord.id = returnRecord.id;
    }

    await this.resolveRelations(jsonRecord, record, req);
    returnRecord = await this.dataStoreModel.update(jsonRecord.id, record);

    return returnRecord;
  }

  private async validateOwner(reqUser: UserModel, recordId: string) {
    if (!this.model.serverMetadata.ownerOnly) {
      return;
    }

    const record = await this.dataStoreModel.getById(recordId);

    if (record && record[this.model.serverMetadata.userField]?.toString() !== reqUser.id.toString()) {
      throw new Error("Unauthorized");
    }
  }

  private async resolveRelations(jsonRecord: JSONRecordType, record: any, req: Request) {
    if (!jsonRecord.relations) {
      return;
    }

    await Promise.all(this.model.metadata.relations.map(async (relation) => {
      if (relation.fk in jsonRecord.relations) {
        await this.resolveRelationByIds(jsonRecord, record, relation);
        return;
      }

      if (!(relation.field in jsonRecord.relations)) {
        return;
      }

      await this.resolveInPlaceRelation(jsonRecord, record, req, relation);
    }));
  }

  private async resolveInPlaceRelation(jsonRecord: JSONRecordType, record: any, req: Request, relation: RelationType) {
    const subRoute = this.routeFactory.getRoute(
      (this.model.metadata.fieldTypeMap.get(relation.field) as ModelSelectFieldType).ref) as JsonApiRoute;
    if (relation.reverseField) {
      (relation.multi ? jsonRecord.relations[relation.field] : [jsonRecord.relations[relation.field]])
        .forEach(relationJsonRecord => relationJsonRecord.attributes[relation.reverseField] = jsonRecord.id);
    }
    if (relation.multi) {
      record[relation.field] = await Promise.all(jsonRecord.relations[relation.field].map(relationJsonRecord =>
        subRoute.createOrUpdateJson(relationJsonRecord, req)));
    } else {
      record[relation.field] = await subRoute.createOrUpdateJson(jsonRecord.relations[relation.field], req);
    }
  }

  private async resolveRelationByIds(jsonRecord: JSONRecordType, record: any, relation: RelationType) {
    // ID of record used instead of record
    record[relation.fk] = jsonRecord.relations[relation.fk];

    if (relation.reverseField) {
      const subRoute = this.routeFactory.getRoute(
        (this.model.metadata.fieldTypeMap.get(relation.field) as ModelSelectFieldType).ref) as JsonApiRoute;
      if (relation.multi) {
        await Promise.all(record[relation.fk].map(fkId =>
          subRoute.dataStoreModel.update(fkId, {[relation.reverseField]: jsonRecord.id})));
      } else {
        await subRoute.dataStoreModel.update(record[relation.fk], {[relation.reverseField]: jsonRecord.id});
      }
    }
  }

  private getResponsePayload(req: Request, records: any): JSONResponse {
    if (!records) {
      return {};
    }

    const links: LinksType = {};
    if (records.map && records.length > 0) {
      links.next = this.apiPath.replace(/\/:(.*)?/, (match, field) => req.params[field]) +
        `?${getQueryString(req.query)}&${PAGINATION_KEY}=${records[records.length - 1].id}`;
    }
    return {
      data: records.map?.(rec => this.convertToJSON(rec)) || this.convertToJSON(records),
      ...(Object.keys(links).length > 0 ? {links}: {}),
    };
  }

  private getLimit(req: Request): number {
    if (!(PAGE_SIZE_KEY in req.query)) {
      return this.config.recordsResultLimit;
    }

    const queryLimit = Number(req.query[PAGE_SIZE_KEY]);

    if (Number.isNaN(queryLimit)) {
      return this.config.recordsResultLimit;
    }
    return queryLimit;
  }
}
