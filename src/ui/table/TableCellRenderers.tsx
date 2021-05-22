import React, {ReactElement} from "react";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {ModelStoreRepository} from "../store";
import {getDisplayText} from "../utils/getDisplayText";
import {FieldInputType, ModelSelectFieldType} from "../../models/metadata/Fields";
import {ModelFieldType} from "../../models/metadata/ModelMetadata";

const ArrayRenderer = (field: ModelFieldType) => value => value?.join?.(", ") || value;

export const FIELD_TO_RENDERER_MAP: {
  [input in FieldInputType]?: (fieldType: ModelFieldType) => (value: any) => ReactElement
} = {
  "switch": (fieldType: ModelFieldType) => value => value ? <CheckOutlined/> : <CloseOutlined/>,
  "select": ArrayRenderer,
  "modelSelect": (fieldType: ModelFieldType) => {
    const store = ModelStoreRepository.instance.getOrCreate((fieldType as ModelSelectFieldType).ref);
    return value => value?.join?.map(id => getDisplayText(store.modelStoreData.recordsMap.get(id))).join(", ") ||
      getDisplayText(store.modelStoreData.recordsMap.get(value));
  },
  "array": ArrayRenderer,
}
