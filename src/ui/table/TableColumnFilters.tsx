import React from "react";
import {ColumnType} from "antd/lib/table";
import {SelectEnumItems} from "../utils/SelectEnumItems";
import {ModelFieldType} from "../../models/metadata/ModelMetadata";
import {FieldInputType, SelectFieldType} from "../../models/metadata/Fields";

type SelectFilterType = {
  text: string;
  value: string;
}
const SelectFilterOptionsMap = new SelectEnumItems<SelectFilterType>((key, value) => {
  return {
    text: key,
    value,
  };
});

const SelectOptionsFilter = (fieldType: ModelFieldType): ColumnType<any> => {
  return {
    filters: SelectFilterOptionsMap.getOrCreate((fieldType as SelectFieldType).opts),
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  };
}

export const FIELD_TO_FILTER_MAP: {
  [input in FieldInputType]?: (fieldType: ModelFieldType) => ColumnType<any>
} = {
  "select": SelectOptionsFilter,
}
