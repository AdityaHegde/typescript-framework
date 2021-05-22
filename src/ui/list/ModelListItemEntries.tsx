import React, {
  FunctionComponent,
} from "react"
import {
  TextListItem, SwitchListItem, ListItemType
} from "./BasicListItems";
import { ModelSelectListItem } from "./ModelSelectListItem";
import {BaseType} from "../../models/BaseType";
import {FieldInputType, FieldType} from "../../models/metadata/Fields";

type ModelListItemEntriesProps<Model> = {
  record: Model;
  model: typeof BaseType;
}

const INPUT_TO_COMPONENT: {
  [input in FieldInputType]: FunctionComponent<ListItemType>
} = {
  "text": TextListItem,
  "number": TextListItem,
  "switch": SwitchListItem,
  "select": TextListItem,
  "array": TextListItem,
  "modelSelect": ModelSelectListItem,
  // TODO
  "date": TextListItem,
}

function getListItem(fieldType: FieldType, value: any) {
  const InputComponent = INPUT_TO_COMPONENT[fieldType.type];
  return <InputComponent key={fieldType.field} fieldType={fieldType} value={value}/>;
}

export const ModelListItemEntries = function<Model extends BaseType>(
  props: ModelListItemEntriesProps<Model>,
) {
  const listItems = props.model.metadata.fieldTypes
    .filter(fieldType => !fieldType.displayField && !fieldType.restricted)
    .map(fieldType => getListItem(fieldType, props.record[fieldType.field]));

  return (
    <>
      {listItems}
    </>
  );
}
