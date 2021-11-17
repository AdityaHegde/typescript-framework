import {Models, UserModels} from "../test-classes/server/Models";
import {MochaTestBase} from "@adityahegde/typescript-test-utils/dist/mocha";
import {Authentication, DataStore, RouteFactory, Server, ServerConfig} from "../../src/server";
import {addModelsToList} from "../../src/models";

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
