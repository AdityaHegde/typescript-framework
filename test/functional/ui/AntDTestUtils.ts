import {ElementHandle, Page} from "playwright";
import {BaseType} from "../../../src/models";

export class AntDTestUtils {
  public static async fillForm(
    page: Page, inputSelector: string, model: typeof BaseType,
    record: Record<string, any>, inputFilter?: Set<string>,
  ) {
    const inputs = await page.$$(inputSelector);
    for (let idx = 0, inputIdx = 0; idx < model.metadata.fieldTypes.length; idx++) {
      const fieldType = model.metadata.fieldTypes[idx];
      if (inputFilter && !inputFilter.has(fieldType.field)) {
        continue;
      }
      const value = record[fieldType.field];
      const input = inputs[inputIdx];

      switch (fieldType.type) {
        case "text":
        case "number":
          await input.type(value);
          break;
        case "select":
          await this.select(page, input, value);
          break;
      }

      inputIdx++;
    }
  }

  public static async select(page: Page, element: ElementHandle<any>, value: any) {
    await element.click();
    const arrayValues: Array<any> = value.forEach ? value : [value];
    for (const arrayValue of arrayValues) {
      await page.click(`.ant-select-item-option[title=${arrayValue}]`);
    }
  }
}
