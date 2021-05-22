import {DataStoreModel} from "../../datastore/DataStoreModel";
import {Request, Router} from "express";
import {Authentication} from "../authentication/Authentication";
import {LoggerBase} from "../../logging/LoggerBase";
import {RouteFactory} from "./RouteFactory";
import {RoutesConfig} from "./RoutesConfig";
import { BaseType } from "../../../models/BaseType";

export class Route extends LoggerBase {
  public readonly model: typeof BaseType;
  protected config: RoutesConfig;
  protected routeFactory: RouteFactory;
  protected dataStoreModel: DataStoreModel;
  protected authentication: Authentication;
  protected basePath: string;

  public apiPath: string;

  constructor(model: typeof BaseType, config: RoutesConfig, routeFactory: RouteFactory,
              dataStoreModel: DataStoreModel, authentication: Authentication, basePath: string) {
    super();
    this.model = model;
    this.config = config;
    this.routeFactory = routeFactory;
    this.dataStoreModel = dataStoreModel;
    this.authentication = authentication;
    this.basePath = basePath;
  }

  public async init(router: Router): Promise<void> {
    throw new Error("Do not use Route directly or make sure to implement init() method");
  }

  public sanitizeRecord(record: any, params: any, req?: Request): any {
    throw new Error("Do not use Route directly or make sure to implement sanitizeRecord() method");
  }

  public convertToJSON(record: any): any {
    throw new Error("Do not use Route directly or make sure to implement convertToJSON() method");
  }

  public convertRecordsToJSON(records: Array<any>): Array<any> {
    return records.map(record => this.convertToJSON(record));
  }

  public async datastoreQuery(
    record: any, search: any, params: any,
    sanitizedCallback: (sanitizedRecord: any, sanitizedQuery: any) => Promise<any>,
  ): Promise<any> {
    const sanitizedRecord = (record && params) ? this.sanitizeRecord(record, params) : null;
    const sanitizedQuery = (search && params) ? this.sanitizeQuery(search, params) : null;
    return await sanitizedCallback(sanitizedRecord, sanitizedQuery);
  }

  public async datastoreQueryJSONResponse(
    record: any, search: any, params: any,
    sanitizedCallback: (sanitizedRecord: any, sanitizedQuery: any) => Promise<any>,
  ): Promise<any> {
    const sanitizedRecord = (record && params) ? this.sanitizeRecord(record, params) : null;
    const sanitizedQuery = (search && params) ? this.sanitizeQuery(search, params) : null;
    return this.convertToJSON(await sanitizedCallback(sanitizedRecord, sanitizedQuery));
  }

  protected sanitizeQuery(search: any, params: any) {
    throw new Error("Do not use Route directly or make sure to implement sanitizeQuery() method");
  }
}
