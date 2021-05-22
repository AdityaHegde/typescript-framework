import {DataStoreModelFactory} from "../DataStoreModelFactory";
import {DataStoreModel} from "../DataStoreModel";
import {Document, Model} from "mongoose";
import {SchemaFactory} from "./SchemaFactory";
import * as mongoose from "mongoose";
import {MongooseStoreModel} from "./MongooseStoreModel";
import {BaseType} from "../../../models/BaseType";
import {PolymorphicModelLookup} from "../../../models/ModelList";

export class MongooseStoreModelFactory extends DataStoreModelFactory {
  private mongooseModels = new Map<string, Model<Document>>();

  public async createDataStoreModel(model: typeof BaseType): Promise<DataStoreModel> {
    if (this.dataStoreModels.has(model.metadata.modelName)) {
      return this.dataStoreModels.get(model.metadata.modelName);
    }

    const schema = SchemaFactory(model.metadata);

    let mongooseModel: Model<Document>;

    if (PolymorphicModelLookup.has(model.metadata.modelName) &&
        model.metadata.polymorphic !== model.metadata.modelName) {
      mongooseModel = this.mongooseModels.get(model.metadata.polymorphic)
        .discriminator(model.metadata.modelName, schema);
    } else {
      mongooseModel = mongoose.model(
        model.metadata.modelName, schema
      );
    }

    this.mongooseModels.set(model.metadata.modelName, mongooseModel);

    return new MongooseStoreModel(model, mongooseModel);
  }
}
