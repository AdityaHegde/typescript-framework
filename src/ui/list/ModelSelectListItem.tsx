import React from "react";
import { ListItemWrapper, ListItemType } from "./BasicListItems";
import {getDisplayText} from "../utils/getDisplayText";
import {ComponentByModelMap} from "../utils/ComponentByModelMap";
import {ModelSelectFieldType} from "../../models/metadata/Fields";

type ModelSelectItemType = ListItemType & {
  multi?: boolean;
}
const SelectOfModelsMap = new ComponentByModelMap<ModelSelectItemType>(
  (props, modelStore, records, recordsMap) => {
    const showText = (props.multi ? props.value?.map?.(recordId => getDisplayText(recordsMap.get(recordId))).join(", "):
      getDisplayText(recordsMap.get(props.value))) || "";
    return <ListItemWrapper {...props}>{showText}</ListItemWrapper>;
  },
);

export const ModelSelectListItem = (props: ListItemType) => {
  const modelSelectField = (props.fieldType as ModelSelectFieldType);
  const Comp = SelectOfModelsMap.getOrCreate(modelSelectField.ref);
  if (!Comp) {
    throw new Error(`No component for ModelSelectListItem for ${JSON.stringify(modelSelectField)}`);
  }
  return <Comp {...props} multi={modelSelectField.multi} />;
}
