import Form from "antd/lib/form";
import React, {FunctionComponent} from "react";
import {ModelStore} from "../store";
import {FormItemType, ModelSelectFormItem, SelectFormItem, SwitchFormItem, TextFormItem} from "../form";
import {NumberFilterItem} from "./NumberFilterItem";
import Button from "antd/lib/button";
import Space from "antd/lib/space";
import {BaseType} from "../../models/BaseType";
import {FieldInputType, FieldType} from "../../models/metadata/Fields";

const ITEM_TO_FILTER_MAP: {
  [input in FieldInputType]?: FunctionComponent<FormItemType>
} = {
  "text": TextFormItem,
  "select": SelectFormItem,
  "modelSelect": ModelSelectFormItem,
  "number": NumberFilterItem,
  "switch": SwitchFormItem,
}

function getFilterComponent(
  fieldType: FieldType,
) {
  const FilterComponent = ITEM_TO_FILTER_MAP[fieldType.type];
  const modifiedFieldType = {
    ...fieldType,
    ...(fieldType.type === "select" || fieldType.type === "modelSelect" ? {multi: true} : {}),
  };
  return <FilterComponent fieldType={modifiedFieldType} inputComponentMap={ITEM_TO_FILTER_MAP as any} key={fieldType.field} />
}

type ModelFilterProps<Model extends BaseType> = {
  modelStore: ModelStore<Model>;
  onSubmit: (values: any) => void;
}
export function ModelFilter<Model extends BaseType>(
  {modelStore, onSubmit}: ModelFilterProps<Model>,
) {
  const formItems = modelStore.modelClass.metadata.filters
    .filter(filter => !filter.local)
    .map(filter => modelStore.modelClass.metadata.fieldTypeMap.get(filter.field))
    .filter(fieldType => fieldType.type in ITEM_TO_FILTER_MAP)
    .map(fieldType => getFilterComponent(fieldType));

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onSubmit} labelCol={{span: 8}} wrapperCol={{span: 16}} >
      {formItems}
      <Form.Item label=" " colon={false}>
        <Space>
          <Button type="primary" htmlType="submit">Filter</Button>
          <Button htmlType="button" onClick={onReset}>Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
