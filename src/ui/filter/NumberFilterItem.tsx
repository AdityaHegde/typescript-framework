import React from "react";
import Form from "antd/lib/form";
import {FormItemType} from "../form";
import {InputNumber} from "antd";

export function NumberFilterItem(opts: FormItemType) {
  const minField = [opts.fieldType.field, "min"];
  const maxField = [opts.fieldType.field, "max"];
  return (
    <Form.Item label={opts.fieldType.field} key={opts.fieldType.field}>
      <Form.Item name={minField} key={minField.join("_")} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
        <InputNumber placeholder="Min" />
      </Form.Item>
      <Form.Item name={maxField} key={maxField.join("_")} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
        <InputNumber placeholder="Max" />
      </Form.Item>
    </Form.Item>
  )
}