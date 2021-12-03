import {Request} from "express";
import {JsonApiRoute, JSONRecordType} from "./JsonApiRoute";
import {RouteFactory} from "./RouteFactory";
import {BaseType, ModelSelectFieldType} from "../../models";

/**
 * Extracted responsibility of sanitizing various aspects in json api from JsonApiRoute
 */
export class JsonApiSanitizer {
  protected model: typeof BaseType;
  protected routeFactory: RouteFactory;

  constructor(model: typeof BaseType, routeFactory: RouteFactory) {
    this.model = model;
    this.routeFactory = routeFactory;
  }

  public sanitizeRecord(record: any, params: any, req?: Request, read = false): any {
    const attrs: any = {};

    this.model.metadata.fieldTypes
      .filter(fieldType => read || !fieldType.readonly)
      .forEach((fieldType) => {
        attrs[fieldType.field] = record[fieldType.field];
      });
    this.model.metadata.parentKeys.forEach((fieldType) => {
      attrs[fieldType.field] = (fieldType.field in params) && !params[fieldType.field].startsWith(":") ?
        params[fieldType.field] : record[fieldType.field];
    });
    attrs.type = this.model.metadata.modelName;

    if (this.model.serverMetadata.userField && (req as any)?.user) {
      attrs[this.model.serverMetadata.userField] = (req as any).user.id;
    }

    return attrs;
  }

  public convertToJSON(record: any): JSONRecordType {
    const retRecord: JSONRecordType = {
      id: record.id,
      type: this.model.metadata.modelName,
      attributes: {
        ...this.sanitizeRecord(record.toJSON?.() || record, {}, null, true),
      },
    };

    // remove any restricted fields
    this.model.metadata.restricted.forEach((restricted) => {
      delete retRecord.attributes[restricted];
    });

    this.getLinks(retRecord);

    delete retRecord.attributes.id;
    delete retRecord.attributes.type;
    return retRecord;
  }

  public sanitizeQuery(search: any, params: any) {
    const retSearch: any = {};

    // dont query fields not allowed to
    for (const field in search) {
      if (Object.prototype.hasOwnProperty.call(search, field)) {
        const fieldType = this.model.metadata.fieldTypeMap.get(field);
        if (fieldType?.filter && !fieldType?.localFilter) {
          retSearch[field] = search[field];
        }
      }
    }
    this.model.metadata.parentKeys.forEach((field) => {
      if (field.field in params) {
        retSearch[field.field] = params[field.field];
      }
    });

    return retSearch;
  }

  private getLinks(jsonRecord: JSONRecordType) {
    const links = {};

    this.model.metadata.relations.forEach((relation) => {
      if (jsonRecord.attributes[relation.field] === undefined || jsonRecord.attributes[relation.field] === null) {
        return;
      }

      const subRoute = this.routeFactory.getRoute(
        (this.model.metadata.fieldTypeMap.get(relation.field) as ModelSelectFieldType).ref) as JsonApiRoute;

      const link = subRoute.apiPath + (relation.multi ? "" : jsonRecord.attributes[relation.field]);
      if (relation.reverseField) {
        links[relation.field] = link.replace(":" + relation.reverseField, jsonRecord.id);
      } else {
        links[relation.field] = link;
      }
    });

    if (Object.keys(links).length > 0) {
      jsonRecord.links = links;
    }
  }
}
