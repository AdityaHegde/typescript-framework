import {MochaTestBase} from "../../src/test-utils/mocha";
import {ServerConfig} from "../../src/server/ServerConfig";
import {Authentication} from "../../src/server/authentication/Authentication";
import {DataStore} from "../../src/server/datastore/DataStore";
import {Models, UserModels} from "../test-classes/server/Models";
import {addModelsToList} from "../../src/models/ModelList";
import {RouteFactory} from "../../src/server/routes/RouteFactory";
import {Server} from "../../src/server/Server";

addModelsToList([
  ...Models,
  ...UserModels,
]);

export class ServerTestBase extends MochaTestBase {
  protected server: Server;
  protected dataStore: DataStore;
  protected serverConfig: ServerConfig;
  protected authentication: Authentication;
  protected routeFactory: RouteFactory;

  protected ServerBaseUrl: string;

  @MochaTestBase.BeforeSuite()
  public async setupServerTestBase() {
    this.server = new Server(
      this.serverConfig, this.dataStore, this.authentication, this.routeFactory,
    );
    await this.server.start();
    this.ServerBaseUrl = `http://localhost:${this.server.config.port}`;
  }

  @MochaTestBase.AfterSuite()
  public async teardownServerTestBase() {
    await this.server.stop();
  }
}
