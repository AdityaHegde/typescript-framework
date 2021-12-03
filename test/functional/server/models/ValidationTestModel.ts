import {
  BaseType,
  EmailValidation, ModelMetadata, NumberField, RangeValidation,
  RegexValidation,
  Required,
  ServerModelMetadata,
  TextField
} from "../../../../src/models";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ValidationTestModel extends BaseType {
  @Required()
  @RegexValidation({regex: /^[a-zA-Z0-9]*$/})
  @TextField()
  public requiredAlphaNumericField: string;

  @RangeValidation({minValue: 0, maxValue: 2.5})
  @NumberField()
  public numberField: number;

  @EmailValidation()
  @TextField()
  public emailField: string;
}
