import React from "react";
import {ModelForm, useFormRef} from "../form";
import Modal from "antd/lib/modal/Modal";
import { BaseType } from "../../models/BaseType";

type ModalWrapperProps<Model extends BaseType> = {
  title: string;
  visible?: boolean;

  model: typeof BaseType;
  record: Model;

  onSave: (record: Model) => void;
  onCancel: () => void;
}

export function ModalWrapper<Model extends BaseType>(
  {record, model, onCancel, onSave, title, visible}: ModalWrapperProps<Model>,
) {
  const onOk = () => {
    formRef.current.submit();
  };

  const onFinish = (values: any) => {
    onSave({
      ...record,
      ...values,
    });
  };

  const formRef = useFormRef(record);

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <ModelForm model={model} record={record} formRef={formRef} onFinish={onFinish} />
    </Modal>
  )
}
