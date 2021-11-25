import {MongooseConfig, MongooseStore} from "./MongooseStore";
import {MongooseStoreModelFactory} from "./MongooseStoreModelFactory";

export function getMongooseStore(config: MongooseConfig) {
  return new MongooseStore(new MongooseStoreModelFactory(), config);
}
