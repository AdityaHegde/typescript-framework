import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {
  EmailValidation,
  RangeValidation,
  RegexValidation,
  Required
} from "../../../src/models/validation-metadata/Validation";
import {BaseType} from "../../../src/models/BaseType";
import {NumberField, TextField} from "../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";


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
