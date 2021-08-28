import {ServerTestBase} from "./ServerTestBase";
import {BootstrapDataType} from "./getInstances";
import {ServerConfig} from "../../src/server/ServerConfig";
import {Authentication} from "../../src/server/authentication/Authentication";
import {DataStore} from "../../src/server/datastore/DataStore";
import {RouteFactory} from "../../src/server/routes/RouteFactory";

export class ServerParameterizedTestBase extends ServerTestBase {
  protected bootstrapData: BootstrapDataType;

  constructor(suiteTitle: string, dataStore: DataStore, routeFactory: RouteFactory,
              serverConfig: ServerConfig, authentication: Authentication,
              bootstrapData: BootstrapDataType) {
    super(suiteTitle);

    this.dataStore = dataStore;
    this.routeFactory = routeFactory;
    this.serverConfig = serverConfig;
    this.authentication = authentication;
    this.bootstrapData = bootstrapData;
  }

  @ServerTestBase.BeforeSuite()
  public async setupServerTestParameterized() {
    await this.bootstrapData(this.dataStore.dataStoreModelFactory);
  }
}
