import React from "react";
import {Button} from "antd";
import {ModalWrapper} from "./ModalWrapper";
import {ModelList} from "./list";
import {useRecords, useRecordOperations, ModelStore} from "./store";
import {ModelFilter} from "./filter";
import {RestrictAccess} from "./user/RestrictAccess";
import {ModelNameMap, PolymorphicModelLookup} from "../models/ModelList";
import { BaseType } from "../models/BaseType";

export function DataPage<Model extends BaseType>(
  {modelStore, params}: { modelStore: ModelStore<Model>, params?: any },
) {
  const model = modelStore.modelClass;
  const models = [
    model,
    ...(PolymorphicModelLookup.has(model.metadata.modelName) ?
      PolymorphicModelLookup.get(model.metadata.modelName) : []),
  ];
  const {records} = useRecords<Model>(modelStore);
  const {visible, record, onNew, onEdit, onSave, onCancel, onDelete, onQuery} = useRecordOperations<Model>(modelStore, params || {});

  const modalModel: any = record ? ModelNameMap.get(record.type) : model;

  return (
    <>
      <div style={{maxWidth: "500px"}}><ModelFilter modelStore={modelStore} onSubmit={onQuery} /></div>
      <ModelList
        records={records} model={model}
        onEdit={onEdit} onDelete={onDelete}
      />
      <RestrictAccess role={model.serverMetadata?.writeRole}>
        {models.map(
          model => <Button key={model.metadata.modelName} onClick={() => onNew(new model("") as any)}>
            Add {model.metadata.modelName}
          </Button>,
        )}
      </RestrictAccess>
      <ModalWrapper
        title={`${model.metadata.modelName} Form`}
        record={record}
        model={modalModel}
        onSave={onSave}
        onCancel={onCancel}
        visible={visible}
      />
    </>
  );
}
