import {FunctionComponent} from "react";
import {FormItemType, NumberFormItem, SwitchFormItem, TextFormItem} from "./BasicFormItems";
import {SelectFormItem} from "./SelectFormItem";
import {ArrayFormItem} from "./ArrayFormItem";
import {ModelSelectFormItem} from "./ModelSelectFormItem";
import {FieldInputType} from "../../models/metadata/Fields";

export type InputComponentMapType = {
  [input in FieldInputType]: FunctionComponent<FormItemType>
}

export const INPUT_TO_COMPONENT: InputComponentMapType = {
  "text": TextFormItem,
  "number": NumberFormItem,
  "switch": SwitchFormItem,
  "select": SelectFormItem,
  "array": ArrayFormItem,
  "modelSelect": ModelSelectFormItem,
  // TODO
  "date": TextFormItem,
}