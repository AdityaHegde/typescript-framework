import {TestBase} from "@adityahegde/typescript-test-utils";
import {JestTestLibrary} from "@adityahegde/typescript-test-utils/dist/jest/JestTestLibrary";
import {ServerTestSetup} from "./ServerTestSetup";
import {UserModels, Models} from "../test-classes/server/Models";
import {addModelsToList, UserModel} from "../../src/models";
import {Authentication, DataStore, RouteFactory} from "../../src/server";
import {ServerTestSuiteParameter} from "./getServerTestSuiteParameter";

addModelsToList([
  ...Models,
  ...UserModels,
]);

@TestBase.TestLibrary(JestTestLibrary)
// this is a ServerTestSetup instead of having before and after in ServerTestBase to support servers in other languages
@TestBase.TestSuiteSetup(ServerTestSetup)
export class ServerTestBase extends TestBase {
  protected testSuiteParameter: ServerTestSuiteParameter;
  protected authentication: Authentication;
  protected userModel: typeof UserModel;
  protected dataStore: DataStore;
  protected routeFactory: RouteFactory;

  @TestBase.BeforeSuite()
  public flattenVariables() {
    this.authentication = this.testSuiteParameter.server.authentication;
    this.userModel = this.testSuiteParameter.server.authentication.userModelClass;
    this.dataStore = this.testSuiteParameter.server.dataStore;
    this.routeFactory = this.testSuiteParameter.server.routeFactory;
  }
}
