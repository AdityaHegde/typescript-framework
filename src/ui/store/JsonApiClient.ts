import {ModelClient} from "./ModelClient";
import {fetchWrapper} from "../utils/fetch";
import {getQueryString} from "../utils/getQueryString";
import {ModelNameMap} from "../../models/ModelList";
import {BaseType} from "../../models/BaseType";

export class JsonApiClient extends ModelClient {
  private readonly baseApiPath: string;

  constructor(baseApiPath: string) {
    super();
    this.baseApiPath = baseApiPath;
  }

  public async fetch<Model extends BaseType>(modelClass: typeof BaseType, params: any): Promise<Array<Model>> {
    const queryParams = this.buildQueryParams(modelClass, params);
    const url = this.buildApiPath<Model>(modelClass, params) + (queryParams ? `/?${queryParams}` : "");
    const resp = await fetchWrapper(url, "GET");
    return resp.data.map(rawRecord => this.deserialize<Model>(modelClass, rawRecord));
  }

  public async fetchSingle<Model extends BaseType>(modelClass: typeof BaseType, id: string): Promise<Model> {
    return this.deserialize<Model>(
      modelClass,
      await fetchWrapper(this.buildModelApiPath<Model>(modelClass, { id } as any), "GET"),
    );
  }

  public async createRecord<Model extends BaseType>(modelClass: typeof BaseType, createdRecord: Model): Promise<Model> {
    return this.deserialize<Model>(
      modelClass,
      await fetchWrapper(this.buildApiPath<Model>(modelClass, createdRecord), "POST", {
        data: this.serialize<Model>(modelClass, createdRecord),
      }),
    );
  }

  public async updateRecord<Model extends BaseType>(modelClass: typeof BaseType, updatedRecord: Model): Promise<Model> {
    return this.deserialize<Model>(
      modelClass,
      await fetchWrapper(this.buildModelApiPath<Model>(modelClass, updatedRecord), "PUT", {
        data: this.serialize<Model>(modelClass, updatedRecord),
      }),
    );
  }

  public async deleteRecord<Model extends BaseType>(modelClass: typeof BaseType, deletedRecord: Model): Promise<void> {
    return fetchWrapper(this.buildModelApiPath<Model>(modelClass, deletedRecord), "DELETE");
  }

  private buildApiPath<Model extends BaseType>(modelClass: typeof BaseType, record: Model): string {
    const parentPath = modelClass.metadata.parentKeys.length > 0 ?
      "/" + modelClass.metadata.parentKeys.map((parentKey) => {
        return (record && record[parentKey.field]) ?
          `${ModelNameMap.get(parentKey.ref).metadata.apiPath}/${record[parentKey.field]}` : "";
      }).filter(parentPath => parentPath !== "").join("/"): "";
    return `${this.baseApiPath}${parentPath}/${modelClass.metadata.apiPath}`;
  }

  private buildModelApiPath<Model extends BaseType>(modelClass: typeof BaseType, record: Model): string {
    return `${this.buildApiPath(modelClass, record)}/${record.id}`;
  }

  private buildQueryParams(modelClass: typeof BaseType, params: any) {
    return getQueryString(params, (key, value, level) => {
      const fieldType = modelClass.metadata.fieldTypeMap.get(key);
      return value !== undefined && value !== null && (level >= 1 || (fieldType?.filter && !fieldType?.localFilter));
    });
  }

  public serialize<Model extends BaseType>(modelClass: typeof BaseType, record: Model): any {
    return {
      type: modelClass.metadata.modelName,
      id: record.id,
      attributes: {
        ...record,
      },
    };
  }

  public deserialize<Model extends BaseType>(modelClass: typeof BaseType, rawResponse: any): Model {
    const rawRecord = rawResponse.data ? rawResponse.data : rawResponse;
    const record = new modelClass(rawRecord.id);
    record.id = rawRecord.id;
    for (const attr in rawRecord.attributes) {
      if (Object.prototype.hasOwnProperty.call(rawRecord.attributes, attr)) {
        record[attr] = rawRecord.attributes[attr];
      }
    }
    return record as Model;
  }
}
