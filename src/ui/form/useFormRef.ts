import {FormInstance} from "antd/lib/form";
import {useEffect, useRef} from "react";
import {BaseType} from "../../models/BaseType";

export function useFormRef(record: BaseType) {
  const formRef = useRef<FormInstance>();
  useEffect(() => {
    if (record && formRef.current) {
      formRef.current.resetFields();
    }
  }, [record]);
  return formRef;
}