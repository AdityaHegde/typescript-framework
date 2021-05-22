import React, {ReactNode,} from "react"
import {getFormItem} from "./getFormItem";
import {INPUT_TO_COMPONENT} from "./InputToComponent";
import {BaseType} from "../../models/BaseType";

type ModelFormItemsProps<Model> = {
  model: typeof BaseType;
  parentFields?: Array<string>;
}

export const ModelFormItems = function<Model extends BaseType>(
  {model, parentFields}: ModelFormItemsProps<Model>,
) {
  const formItems: Array<ReactNode> = [];

  model.metadata.fieldTypes
    .filter(fieldType => !fieldType.readonly)
    .forEach((fieldType) => {
      formItems.push(getFormItem(fieldType, model.validationMetadata?.fieldTypeMap.get(fieldType.field),
        INPUT_TO_COMPONENT, parentFields));
    });

  return (
    <>
      {formItems}
    </>
  );
}
