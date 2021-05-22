import {BaseType} from "../../models/BaseType";

export abstract class ModelClient {
  public abstract fetch<Model extends BaseType>(modelClass: typeof BaseType, params: any): Promise<Array<Model>>;
  public abstract fetchSingle<Model extends BaseType>(modelClass: typeof BaseType, id: string): Promise<Model>;
  public abstract createRecord<Model extends BaseType>(modelClass: typeof BaseType, createdRecord: Model): Promise<Model>;
  public abstract updateRecord<Model extends BaseType>(modelClass: typeof BaseType, updatedRecord: Model): Promise<Model>;
  public abstract deleteRecord<Model extends BaseType>(modelClass: typeof BaseType, deletedRecord: Model): Promise<void>;

  public abstract serialize<Model extends BaseType>(modelClass: typeof BaseType, record: Model): any;
  public abstract deserialize<Model extends BaseType>(modelClass: typeof BaseType, rawResponse: any): Model;
}
