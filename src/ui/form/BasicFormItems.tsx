import React, { PropsWithChildren } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import {InputNumber} from "antd";
import {getValidationRules} from "./getValidationRules";
import {InputComponentMapType} from "./InputToComponent";
import {ValidationFieldType} from "../../models/validation-metadata/Validation";
import {FieldType} from "../../models/metadata/Fields";

export type FormItemType = {
  key: string;
  fieldType: FieldType;
  validationFieldType?: ValidationFieldType;
  parentFields?: Array<string>;
  additionalProps?: any;
  inputComponentMap: InputComponentMapType;
}

export const FormItemWrapper = (props: PropsWithChildren<FormItemType>) => {
  const rules = getValidationRules(props.fieldType, props.validationFieldType);
  return <Form.Item
    name={getFieldName(props)}
    key={props.fieldType.field}
    label={props.fieldType.label}
    rules={rules}
    {...props.additionalProps}
  >
    {props.children}
  </Form.Item>
}

export const TextFormItem = (props: FormItemType) => {
  return <FormItemWrapper {...props}><Input type={"text"} /></FormItemWrapper>;
}

export const NumberFormItem = (props: FormItemType) => {
  return <FormItemWrapper {...props}><InputNumber /></FormItemWrapper>;
}

export const SwitchFormItem = (props: FormItemType) => {
  return <FormItemWrapper {...props}><Input type={"checkbox"} /></FormItemWrapper>;
}

export const getFieldName = (props: FormItemType): Array<string> | string => {
  if (props.parentFields) {
    return [
      ...props.parentFields,
      props.fieldType.field
    ];
  }
  return props.fieldType.field;
}
