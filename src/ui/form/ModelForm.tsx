import Form, {FormInstance} from "antd/lib/form/Form";
import React, {MutableRefObject} from "react";
import {ModelFormItems} from "./ModelFormItems";
import {BaseType} from "../../models/BaseType";

type ModelFormProps<Model extends BaseType> = {
  model: typeof BaseType;
  record: Model;

  formRef: MutableRefObject<FormInstance>;
  onFinish: (values: any) => void;
}

export function ModelForm<Model extends BaseType>(props: ModelFormProps<Model>) {
  return <Form ref={props.formRef} onFinish={props.onFinish} initialValues={props.record} labelCol={{span: 8}} wrapperCol={{span: 16}} >
    <ModelFormItems model={props.model} />
  </Form>
}
