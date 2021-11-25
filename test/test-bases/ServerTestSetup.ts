import {TestSuiteSetup} from "@adityahegde/typescript-test-utils";
import { ServerTestSuiteParameter } from "./getServerTestSuiteParameter";

export class ServerTestSetup extends TestSuiteSetup {
  public async setupSuite(testSuiteParameter: ServerTestSuiteParameter): Promise<void> {
    await testSuiteParameter.server.start();
    testSuiteParameter.ServerBaseUrl = `http://localhost:${testSuiteParameter.server.config.port}`;

    await testSuiteParameter.bootstrapData(testSuiteParameter);
  }

  public async teardownSuite(testSuiteParameter: ServerTestSuiteParameter): Promise<void> {
    await testSuiteParameter.server.stop();
  }
}
