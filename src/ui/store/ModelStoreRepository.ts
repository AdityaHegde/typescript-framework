import {ModelStore} from "./ModelStore";
import {ModelClient} from "./ModelClient";
import {ModelNameMap} from "../../models/ModelList";
import {BaseType} from "../../models/BaseType";

export class ModelStoreRepository extends Map<string, ModelStore<any>> {
  private readonly modelClient: ModelClient;

  constructor(modelClient: ModelClient) {
    super();

    this.modelClient = modelClient;
  }

  public getOrCreate<Model extends BaseType>(modelName: string): ModelStore<Model> {
    if (this.has(modelName)) {
      return this.get(modelName);
    } else {
      const newModelStore = new ModelStore<Model>(this.modelClient, ModelNameMap.get(modelName));
      this.set(modelName, newModelStore);
      return newModelStore;
    }
  }

  public static instance: ModelStoreRepository;
}
