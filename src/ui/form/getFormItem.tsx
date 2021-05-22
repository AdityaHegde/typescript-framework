import {InputComponentMapType} from "./InputToComponent";
import React from "react";
import {ValidationFieldType} from "../../models/validation-metadata/Validation";
import {FieldType} from "../../models/metadata/Fields";

export function getFormItem(
  fieldType: FieldType, validationFieldType: ValidationFieldType,
  inputComponentMap: InputComponentMapType,
  parentFields?: Array<string>, addnProps: any = {},
) {
  const InputComponent = inputComponentMap[fieldType.type];
  return <InputComponent
    key={fieldType.field}
    fieldType={fieldType} validationFieldType={validationFieldType}
    parentFields={parentFields} additionalProps={addnProps} inputComponentMap={inputComponentMap}
  />;
}