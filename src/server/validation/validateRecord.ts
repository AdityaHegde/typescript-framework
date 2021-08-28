import validator from "validator";
import { BaseType } from "../../models/BaseType";
import {ValidationError} from "./ValidationError";

export function validateRecord(model: typeof BaseType, record: BaseType) {
  const error = new ValidationError();
  model.validationMetadata?.fieldTypes.forEach((fieldType) => {
    const value = record[fieldType.field] + "";
    if ((record[fieldType.field] === undefined || record[fieldType.field] === null) && fieldType.required) {
      error.addReason(`${fieldType.field} is required.`, fieldType.field);
    }
    if (fieldType.email && !validator.isEmail(value)) {
      error.addReason("Invalid email.", fieldType.field);
    }
    if (("maxValue" in fieldType) && ("minValue" in fieldType) &&
        !validator.isFloat(value, {min: fieldType.minValue, max: fieldType.maxValue})) {
      error.addReason("Invalid number", fieldType.field);
    }
    if (fieldType.regex && !value.match(fieldType.regex)) {
      error.addReason("Invalid value", fieldType.field);
    }
  });

  if (error.hasReasons()) {
    throw error;
  }
}
