import React, {useContext} from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ModelListItemEntries } from "./ModelListItemEntries";
import List from "antd/lib/list";
import {getDisplayText} from "../utils/getDisplayText";
import {UserContext} from "../user/UserContext";
import {BaseType} from "../../models/BaseType";

type ModelListItemProps<Model extends BaseType> = {
  record: Model;
  model: typeof BaseType;

  onEdit: (record: Model) => void;
  onDelete: (record: Model) => void;
}

export function ModelListItem<Model extends BaseType>(
  {model, record, onDelete, onEdit}: ModelListItemProps<Model>,
) {
  const userContext = useContext(UserContext);

  const writeChecker = userContext?.userModel.getUserRoleChecker(model.serverMetadata.writeRole);

  const actions = (model.serverMetadata?.writeRole === undefined ||
    writeChecker?.(userContext?.user)) ?
    [
      <EditOutlined onClick={() => onEdit(record)} />,
      <DeleteOutlined onClick={() => onDelete(record)} />,
    ] : [];

  return (
    <List.Item
      key={record.id}
      actions={actions}
    >
      <List.Item.Meta
        title={getDisplayText(record)}
        description={
          <ModelListItemEntries record={record} model={model} />
        }
      />
    </List.Item>
  )
}
