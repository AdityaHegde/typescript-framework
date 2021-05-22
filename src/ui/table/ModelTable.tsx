import React, {useContext} from "react";
import Table, {ColumnType} from "antd/lib/table";
import {FIELD_TO_RENDERER_MAP} from "./TableCellRenderers";
import {FIELD_TO_FILTER_MAP} from "./TableColumnFilters";
import Space from "antd/lib/space";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {UserContext} from "../user/UserContext";
import {ModelFieldType} from "../../models/metadata/ModelMetadata";
import {BaseType} from "../../models/BaseType";

type ModelTableProps<Model extends BaseType> = {
  model: typeof BaseType;
  records: Array<Model>;

  onEdit: (record: Model) => void;
  onDelete: (record: Model) => void;
}

function getColumnDefinition(fieldType: ModelFieldType): ColumnType<any> {
  let columnType: ColumnType<any> = {
    title: fieldType.label,
    key: fieldType.field,
    dataIndex: fieldType.field,
  };

  if (fieldType.type in FIELD_TO_RENDERER_MAP) {
    columnType.render = FIELD_TO_RENDERER_MAP[fieldType.type](fieldType);
  }

  if (fieldType.filter && (fieldType.type in FIELD_TO_FILTER_MAP)) {
    columnType = {
      ...FIELD_TO_FILTER_MAP[fieldType.type](fieldType),
      ...columnType,
    };
  }

  return columnType;
}

export function ModelTable<Model extends BaseType>(
  {model, records, onEdit, onDelete}: ModelTableProps<Model>
) {
  const columns = model.metadata.fieldTypes
    .filter(fieldType => !fieldType.restricted)
    .map(fieldType => getColumnDefinition(fieldType));

  const userContext = useContext(UserContext);

  const writeChecker = userContext?.userModel.getUserRoleChecker(model.serverMetadata.writeRole);

  if (model.serverMetadata?.writeRole === undefined ||
      writeChecker?.(userContext?.user)) {
    columns.push({
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => onEdit(record)} />,
          <DeleteOutlined onClick={() => onDelete(record)} />,
        </Space>
      ),
    });
  }

  return (
    <Table columns={columns} dataSource={records} rowKey="id" />
  )
}
