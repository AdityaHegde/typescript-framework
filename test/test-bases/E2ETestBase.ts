import {ServerTestBase} from "./ServerTestBase";
import {PlaywrightSuiteSetup} from "@adityahegde/typescript-test-utils/dist/playwright/PlaywrightSuiteSetup";
import {Page} from "playwright";
import {addModelsToList} from "../../src/models";
import {Models} from "../functional/ui/app/models/Models";
import {AntDTestUtils} from "../functional/ui/AntDTestUtils";
import {ProductUser} from "../functional/ui/app/models/ProductUser";

addModelsToList(Models);

@ServerTestBase.TestSuiteSetup(PlaywrightSuiteSetup)
export class E2ETestBase extends ServerTestBase {
  protected async loginUser(page: Page) {
    await page.goto(this.testSuiteParameter.ServerBaseUrl);

    await AntDTestUtils.fillForm(page, "input.ant-input", ProductUser,
      this.testSuiteParameter.loginUser, new Set<string>(["user", "pwd"]));
    await page.click("button");

    await page.waitForURL(`${this.testSuiteParameter.ServerBaseUrl}/product`);
  }
}
