import {ValidationFieldType} from "./Validation";
import {dedupeFieldTypes} from "../../utils/dedupeFieldTypes";

export class ValidationMetadata {
  public fieldTypes = new Array<ValidationFieldType>();
  public fieldTypeMap = new Map<string, ValidationFieldType>();

  constructor(copyFrom: ValidationMetadata) {
    if (copyFrom) {
      copyFrom.fieldTypes.forEach(validationFieldType => this.addValidation(validationFieldType));
    }
  }

  public addValidation(validationFieldType: ValidationFieldType) {
    dedupeFieldTypes(this.fieldTypes, this.fieldTypeMap, validationFieldType);
  }
}
