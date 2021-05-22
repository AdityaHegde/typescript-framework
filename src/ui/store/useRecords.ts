import {useEffect, useState} from "react";
import { BaseType } from "../../models/BaseType";
import {ModelStore} from "./ModelStore";

export function useRecords<Model extends BaseType>(
  modelStore: ModelStore<Model>,
): { records: Array<Model>, recordsMap: Map<string, Model> } {
  const [records, setRecords] = useState<Array<Model>>([]);
  const [recordsMap, setRecordsMap] = useState<Map<string, Model>>(new Map());

  useEffect(() => {
    setRecords(modelStore.modelStoreData.records);
    setRecordsMap(modelStore.modelStoreData.recordsMap);
  }, [modelStore.modelStoreData]);

  return { records, recordsMap };
}
