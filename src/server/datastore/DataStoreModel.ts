import {BaseType} from "../../models/BaseType";

export type QueryOptions = {
  limit?: number;
  sort?: {
    [field in string]: (1 | -1)
  };
  fromId?: string;
}

export abstract class DataStoreModel {
  public readonly model: typeof BaseType;

  constructor(model: typeof BaseType) {
    this.model = model;
  }

  public abstract query(search: any, options?: QueryOptions): Promise<Array<any>>;
  public abstract querySingle(search: any): Promise<any>;
  public abstract getById(id: string): Promise<any>;
  public abstract create(record: any): Promise<any>;
  public abstract update(id: string, record: any): Promise<any>;
  public abstract updateOrCreate(query: any, record: any): Promise<any>;
  public abstract updateMany(query: any, updates: any, options?: QueryOptions): Promise<any>;
  public abstract delete(id: string, record: any): Promise<any>;
  public abstract deleteMany(query: any, options?: QueryOptions): Promise<any>;

  public async findOrCreate(query: any, record: any): Promise<any> {
    const retRecord = await this.querySingle(query);
    if (!retRecord) {
      return this.create(record);
    }
    return retRecord;
  }
}
