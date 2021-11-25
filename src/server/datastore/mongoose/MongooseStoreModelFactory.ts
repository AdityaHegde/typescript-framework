import {DataStoreModelFactory} from "../DataStoreModelFactory";
import {DataStoreModel} from "../DataStoreModel";
import {Document, Model} from "mongoose";
import {SchemaFactory} from "./SchemaFactory";
import * as mongoose from "mongoose";
import {MongooseStoreModel} from "./MongooseStoreModel";
import {BaseType, PolymorphicModelLookup} from "../../../models";

const CompiledModels = new Map<string, Model<Document>>();

export class MongooseStoreModelFactory extends DataStoreModelFactory {
  private mongooseModels = new Map<string, Model<Document>>();

  public async createDataStoreModel(model: typeof BaseType): Promise<DataStoreModel> {
    if (this.dataStoreModels.has(model.metadata.modelName)) {
      return this.dataStoreModels.get(model.metadata.modelName);
    }

    let mongooseModel: Model<Document>;
    if (CompiledModels.has(model.metadata.modelName)) {
      mongooseModel = CompiledModels.get(model.metadata.modelName);
    } else {
      mongooseModel = this.getCompiledModel(model);
      CompiledModels.set(model.metadata.modelName, mongooseModel);
    }

    this.mongooseModels.set(model.metadata.modelName, mongooseModel);

    return new MongooseStoreModel(model, mongooseModel);
  }

  private getCompiledModel(model: typeof BaseType): Model<Document> {
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

    return mongooseModel;
  }
}
