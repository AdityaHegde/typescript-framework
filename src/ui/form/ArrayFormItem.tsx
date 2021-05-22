import React from "react";
import {
  FormItemType, getFieldName
} from "./BasicFormItems";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import Form from "antd/lib/form";
import {Button} from "antd";
import {getFormItem} from "./getFormItem";
import {ArrayFieldType} from "../../models/metadata/Fields";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const getFormArrayItem = (subField, opts: FormItemType) => {
  return getFormItem(
    {
      field: subField.name,
      type: (opts.fieldType as ArrayFieldType).subType,
    },
    opts.validationFieldType,
    opts.inputComponentMap,
    opts.parentFields,
    {
      label: "",
      style: { width: "80%", display: "inline-block", marginBottom: "0px" },
    }
  );
}

export const ArrayFormItem = (opts: FormItemType) => {
  return <Form.List name={getFieldName(opts)} key={opts.fieldType.field}>
    {(subFields, { add, remove }) => {
      return (
        <div>
          {subFields.map((subField, index) => {
            return (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? opts.fieldType.field: ""}
                required={false}
                key={subField.key}
              >
                {getFormArrayItem(subField, opts)}
                <MinusCircleOutlined
                  className="dynamic-delete-button"
                  style={{ margin: "8px" }}
                  onClick={() => remove(subField.name)}
                />
              </Form.Item>
            )
          })}
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: "80%" }}
            >
              <PlusOutlined /> Add {opts.fieldType.field}
            </Button>
          </Form.Item>
        </div>
      );
    }}
  </Form.List>
}
