import { BaseType } from "../../models/BaseType";
import {ModelClient} from "./ModelClient";
import {ModelStoreData} from "./ModelStoreData";

export class ModelStore<Model extends BaseType> {
  private readonly modelClient: ModelClient;
  public readonly modelClass: typeof BaseType;
  public modelStoreData: ModelStoreData<Model>;

  constructor(modelClient: ModelClient, modelClass: typeof BaseType) {
    this.modelClient = modelClient;
    this.modelClass = modelClass;
    this.modelStoreData = new ModelStoreData<Model>([], new Map());
  }

  public async queryRecords(params = {}) {
    this.modelStoreData = this.modelStoreData.replaceRecords(
      await this.modelClient.fetch<Model>(this.modelClass, params));
  }

  public async createRecord(createdRecord: Model) {
    this.modelStoreData = this.modelStoreData.addRecord(
      await this.modelClient.createRecord<Model>(this.modelClass, createdRecord));
  }

  public async updateRecord(oldRecord: Model, updatedRecord: Model) {
    const newRecord = await this.modelClient.updateRecord<Model>(this.modelClass, updatedRecord);
    this.modelStoreData.deleteRecord(oldRecord);
    this.modelStoreData = this.modelStoreData.addRecord(newRecord);
  }

  public async deleteRecord(deletedRecord: Model) {
    await this.modelClient.deleteRecord<Model>(this.modelClass, deletedRecord);
    this.modelStoreData = this.modelStoreData.deleteRecord(deletedRecord);
  }
}
