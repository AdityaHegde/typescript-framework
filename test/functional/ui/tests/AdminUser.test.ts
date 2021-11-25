import {E2ETestBase} from "../../../test-bases/E2ETestBase";
import {getE2EParameter} from "../getE2EParameter";
import {ADMIN_USER, CHAIR_PRODUCTS} from "../../../data/e2e";
import {Page} from "playwright";
import {expect} from "@playwright/test";
import {AntDTestUtils} from "../AntDTestUtils";

@E2ETestBase.ParameterizedSuite(getE2EParameter("AdminUserTest", ADMIN_USER))
export class AdminUserTest extends E2ETestBase {
  @E2ETestBase.Test()
  public async productListingPage({page}: {page: Page}) {
    await this.loginUser(page);

    await AntDTestUtils.select(page, await page.$(".ant-select-selection-search-input"), "Chair");
    await page.click(".ant-btn-primary");

    const products = await page.$$(".ant-list-item");
    for (let idx = 0; idx < products.length; idx++) {
      await expect(products[idx].$("h4")).toContainText(CHAIR_PRODUCTS[idx].name);
    }
  }
}
