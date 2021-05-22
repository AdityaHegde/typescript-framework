import {ValidationFieldType} from "../../models/validation-metadata/Validation";
import {FieldType} from "../../models/metadata/Fields";

export function getValidationRules(fieldType: FieldType, validationFieldType: ValidationFieldType) {
  if (!validationFieldType) {
    return null;
  }

  const rules = [];

  if (validationFieldType.required) {
    rules.push({required: true, message: `${fieldType.field} is required.`});
  }
  if (validationFieldType.email) {
    rules.push({type: "email", message: "Please enter a valid email."});
  }
  if (("minValue" in validationFieldType) && ("maxValue" in validationFieldType)) {
    rules.push({
      type: "number", min: validationFieldType.minValue, max: validationFieldType.maxValue,
      message: `Entered value should be between ${validationFieldType.minValue} and ${validationFieldType.maxValue}.`,
    });
  }
  if (validationFieldType.regex) {
    rules.push({pattern: validationFieldType.regex, message: validationFieldType.message});
  }
  return rules;
}
