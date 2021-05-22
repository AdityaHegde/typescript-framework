import {BaseType} from "../../models/BaseType";

/**
 * Store records and a map to id to record.
 * Is in a separate object so that records and map can be updated in place.
 * React is notified of change by updating this object in the hooks,
 */
export class ModelStoreData<Model extends BaseType> {
  public records: Array<Model>;
  public recordsMap: Map<string, Model>;

  constructor(records: Array<Model>, recordsMap: Map<string, Model>) {
    this.records = records;
    this.recordsMap = recordsMap;
  }

  public replaceRecords(newRecords: Array<Model>): ModelStoreData<Model> {
    const newStoreData = new ModelStoreData<Model>(newRecords, new Map());
    newRecords.map(record => newStoreData.recordsMap.set(record.id, record));
    return newStoreData;
  }

  public addRecord(newRecord: Model): ModelStoreData<Model> {
    this.records.push(newRecord);
    this.recordsMap.set(newRecord.id, newRecord);
    return new ModelStoreData<Model>(this.records, this.recordsMap);
  }

  public deleteRecord(oldRecord: Model): ModelStoreData<Model> {
    const idx = this.records.findIndex(record => record.id === oldRecord.id);
    if (idx >= 0) {
      this.records.splice(idx, 1);
      this.recordsMap.delete(oldRecord.id);
      return new ModelStoreData<Model>(this.records, this.recordsMap);
    }
    return this;
  }
}
