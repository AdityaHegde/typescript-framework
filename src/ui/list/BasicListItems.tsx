import React, { PropsWithChildren } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {FieldType} from "../../models/metadata/Fields";

export type ListItemType = {
  fieldType: FieldType;
  value: any;
}

export const ListItemWrapper = (props: PropsWithChildren<ListItemType>) => {
  return <div>
    {props.fieldType.label}: {props.children}
  </div>;
}

export const TextListItem = (props: ListItemType) => {
  return <ListItemWrapper {...props}>
    {props.value?.join?.(", ") || props.value}
  </ListItemWrapper>
}

export const SwitchListItem = (props: ListItemType) => {
  return <ListItemWrapper {...props}>
    {props.value ? <CheckOutlined /> : <CloseOutlined />}
  </ListItemWrapper>
}
