import {DataStoreModel} from "./DataStoreModel";
import {BaseType} from "../../models/BaseType";
import {ModelList} from "../../models/ModelList";

export abstract class DataStoreModelFactory extends Map<string, DataStoreModel> {
  protected dataStoreModels = new Map<string, DataStoreModel>();

  public async init() {
    await Promise.all(ModelList.map(async (model) => {
      const dataStoreModel = await this.createDataStoreModel(model);
      this.dataStoreModels.set(model.metadata.modelName, dataStoreModel);
    }));
  }

  public getDataStoreModel(modelName: string) {
    return this.dataStoreModels.get(modelName);
  }

  public abstract createDataStoreModel(model: typeof BaseType): Promise<DataStoreModel>;
}
