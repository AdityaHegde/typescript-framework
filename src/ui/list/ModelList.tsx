import React from "react";
import { ModelListItem } from "./ModelListItem";
import List from "antd/lib/list";
import {ModelNameMap} from "../../models/ModelList";
import {BaseType} from "../../models/BaseType";

type ModelListProps<Model extends BaseType> = {
  records: Array<Model>;
  model: typeof BaseType;

  onEdit: (record: Model) => void;
  onDelete: (record: Model) => void;
}

export function ModelList<Model extends BaseType>(
  props: ModelListProps<Model>,
) {
  return (
    <List
      dataSource={props.records}
      renderItem={(record) =>
        <ModelListItem
          record={record} model={ModelNameMap.get(record.type)}
          onEdit={props.onEdit} onDelete={props.onDelete}
        />
      }
    />
  );
}
