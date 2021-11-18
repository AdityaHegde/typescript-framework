import {Models, UserModels} from "../test-classes/server/Models";
import {Authentication, DataStore, RouteFactory, Server, ServerConfig} from "../../src/server";
import {addModelsToList} from "../../src/models";
import {TestBase} from "@adityahegde/typescript-test-utils";
import {MochaTestLibrary} from "@adityahegde/typescript-test-utils/dist/mocha/MochaTestLibrary";

addModelsToList([
  ...Models,
  ...UserModels,
]);

@TestBase.TestLibrary(MochaTestLibrary)
export class ServerTestBase extends TestBase {
  protected server: Server;
  protected dataStore: DataStore;
  protected serverConfig: ServerConfig;
  protected authentication: Authentication;
  protected routeFactory: RouteFactory;

  protected ServerBaseUrl: string;

  @TestBase.BeforeSuite()
  public async setupServerTestBase() {
    this.server = new Server(
      this.serverConfig, this.dataStore, this.authentication, this.routeFactory,
    );
    await this.server.start();
    this.ServerBaseUrl = `http://localhost:${this.server.config.port}`;
  }

  @TestBase.AfterSuite()
  public async teardownServerTestBase() {
    await this.server.stop();
  }
}
