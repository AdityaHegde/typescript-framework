import got from "got";
import should from "should";
import {ValidationTestModel} from "../../test-classes/server/ValidationTestModel";
import {JwtMongooseTestBase} from "../../test-bases/JwtMongooseTestBase";
import {sanitize} from "../../data/mongoose";
import {DataProviderData} from "@adityahegde/typescript-test-utils";

@JwtMongooseTestBase.Suite
export class ValidationTest extends JwtMongooseTestBase {
  protected ValidationTestApiBase = "api/validationTestModels";

  @JwtMongooseTestBase.BeforeSuite()
  public async setupValidationTest() {
    this.ValidationTestApiBase = `${this.ServerBaseUrl}/${this.ValidationTestApiBase}`;
  }

  public validationTestData(): DataProviderData<[any, Array<string>]> {
    return {
      subData: [{
        title: "Should fail with required field missing",
        args: [{}, ["requiredAlphaNumericField", "numberField", "emailField"]],
      }, {
        title: "Should fail with regex failure",
        args: [{requiredAlphaNumericField: "!@#$"}, ["requiredAlphaNumericField", "numberField", "emailField"]],
      }, {
        title: "Should fail with number out of range",
        args: [{requiredAlphaNumericField: "abc", numberField: 2.6}, ["numberField", "emailField"]],
      }, {
        title: "Should fail with non email value",
        args: [{requiredAlphaNumericField: "abc", numberField: 2.1, emailField: "abc"}, ["emailField"]],
      }],
    };
  }

  @JwtMongooseTestBase.Test("validationTestData")
  public async shouldFailBecauseOfValidationFailure(attributes: any, failedFields: Array<string>) {
    const resp = await got.post(this.ValidationTestApiBase,
      {json: {data: {type: ValidationTestModel.metadata.modelName, attributes}}, retry: 0, throwHttpErrors: false});

    const errors = JSON.parse(resp.body).errors;
    should(errors).have.length(1);
    should(errors[0].reasons.map(reason => reason.field)).be.eql(failedFields);

    should(await sanitize(got.get(this.ValidationTestApiBase))).have.length(3);
  }

  @JwtMongooseTestBase.Test()
  public async shouldCreateRecord() {
    let recordId: string;
    await sanitize(got.post(this.ValidationTestApiBase,
      {json: {data: {type: ValidationTestModel.metadata.modelName, attributes: {
              requiredAlphaNumericField: "abc", numberField: 2.1, emailField: "abc@abc.com",
            }}}}), id => recordId = id);

    should(await sanitize(got.get(this.ValidationTestApiBase))).have.length(4);

    // cleanup
    await got.delete(`${this.ValidationTestApiBase}/${recordId}`);
  }
}
