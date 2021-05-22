import { useState } from "react";
import { Modal } from "antd";
import {ModelStore} from "./ModelStore";
import { BaseType } from "../../models/BaseType";

type UseRecordOperationsReturn<Model extends BaseType> = {
  visible: boolean,
  record: Model,
  onNew: (newRecord: Model) => void,
  onEdit: (updatedRecord: Model) => void,
  onSave: (savedRecordParams: any) => void,
  onCancel: () => void,
  onDelete: (record: Model) => void,
  onQuery: (search: any) => void;
};

const { confirm } = Modal;

function getModelFromParams<Model>(modelClass: typeof BaseType, params: any): Model {
  const record: Model = new modelClass(params.id) as any;
  for (const p in params) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      record[p] = params[p];
    }
  }
  return record;
}

export function useRecordOperations<Model extends BaseType>(
  modelStore: ModelStore<Model>, params: any,
): UseRecordOperationsReturn<Model> {
  const [record, setRecord] = useState<Model>();
  const [creating, setCreating] = useState(false);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState(false);

  const onNew = (newRecord: Model) => {
    setRecord(newRecord);
    setCreating(true);
    setVisible(true);
  };

  const onEdit = (updatedRecord: Model) => {
    setRecord(updatedRecord);
    setCreating(false);
    setVisible(true);
  };

  const onSave = async (savedRecordParams: any) => {
    const savedRecord = getModelFromParams<Model>(modelStore.modelClass, {
      ...savedRecordParams,
      ...params
    });
    if (creating) {
      await modelStore.createRecord(savedRecord);
    } else {
      await modelStore.updateRecord(record, savedRecord)
    }
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const onDelete = (deletedRecord: Model) => {
    confirm({
      title: `Do you want to delete ${deletedRecord.id}?`,
      onOk() {
        modelStore.deleteRecord(getModelFromParams<Model>(modelStore.modelClass,{
          ...deletedRecord,
          ...params,
        })).then(() => {});
      },
    });
  };

  const onQuery = (search: any) => {
    setQuery(true);
    modelStore.queryRecords(search).then(() => setQuery(false), () => setQuery(false));
  };

  return {visible, record, onNew, onEdit, onSave, onCancel, onDelete, onQuery};
}
