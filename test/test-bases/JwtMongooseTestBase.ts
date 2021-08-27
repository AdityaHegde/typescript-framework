import {ServerTestBase} from "./ServerTestBase";
import {bootstrapMongooseData} from "../data/mongoose";
import {getInstances} from "./getInstances";
import {MongooseStoreModelFactory} from "../../src/server/datastore/mongoose";

const {serverConfig, authentication, routeFactory, dataStore} = getInstances()[0];

export class JwtMongooseTestBase extends ServerTestBase {
  protected serverConfig = serverConfig;
  protected authentication = authentication;
  protected routeFactory = routeFactory;
  protected dataStore = dataStore;

  @ServerTestBase.BeforeSuite()
  public async setupMongooseTestBase() {
    await bootstrapMongooseData(this.dataStore.dataStoreModelFactory as MongooseStoreModelFactory);
  }
}
