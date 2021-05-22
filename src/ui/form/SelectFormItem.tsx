import React from "react";
import { Select, Form } from "antd";
import { FormItemWrapper, FormItemType } from "./BasicFormItems";
import {SelectEnumItems} from "../utils/SelectEnumItems";
import {SelectFieldType} from "../../models/metadata/Fields";

type SelectOptType = {
  value: string;
  name: string;
}

const SelectItemsMap = new SelectEnumItems<SelectOptType>((key, value) => {
  return {
    value,
    name: key,
  };
});

export function SelectFormItem(props: FormItemType) {
  const selectField = props.fieldType as SelectFieldType;
  return <FormItemWrapper {...props}>
    <Select showSearch mode={selectField.multi ? "multiple" : null}>
      {SelectItemsMap.getOrCreate(selectField.opts).map(option =>
        <Select.Option value={option.value} key={option.value}>
          {option.name}
        </Select.Option>
      )}
    </Select>
  </FormItemWrapper>
}
