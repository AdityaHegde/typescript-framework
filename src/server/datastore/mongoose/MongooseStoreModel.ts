import {DataStoreModel, QueryOptions} from "../DataStoreModel";
import {Document, Model, Query} from "mongoose";
import {BaseType} from "../../../models/BaseType";

export class MongooseStoreModel extends DataStoreModel {
  public mongooseModel: Model<Document>;

  constructor(model: typeof BaseType, mongooseModel: Model<Document>) {
    super(model);
    this.mongooseModel = mongooseModel;
  }

  public async query(search: any, options?: QueryOptions): Promise<Array<any>> {
    return this.normalizeRecords(await this.conditionallyApplyFilters(this.mongooseModel.find(this.translateSearch(search)), options));
  }

  public async querySingle(search: any): Promise<any> {
    return this.normalizeRecord(await this.mongooseModel.findOne(search).exec());
  }

  public async getById(id: string): Promise<any> {
    return this.normalizeRecord(await this.mongooseModel.findById(id).exec());
  }

  public async create(record: any): Promise<any> {
    return this.normalizeRecord(await this.mongooseModel.create(record));
  }

  public async update(id: string, record: any): Promise<any> {
    return this.normalizeRecord(await this.mongooseModel.findByIdAndUpdate(id, record, {new: true}).exec());
  }

  public async updateOrCreate(query: any, record: any): Promise<any> {
    return this.normalizeRecord(await this.mongooseModel.findOneAndUpdate(query, record, {new: true, upsert: true}).exec());
  }

  public async updateMany(query: any, updates: any, options?: QueryOptions): Promise<any> {
    const records = await this.conditionallyApplyFilters(this.mongooseModel.find(query), options).exec();
    return this.mongooseModel.updateMany({_id: {"$in": records.map(record => record._id)}}, updates);
  }

  public async delete(id: string, record: any): Promise<any> {
    await this.mongooseModel.findByIdAndDelete(id);
    return {
      id,
      ...record,
    };
  }

  public async deleteMany(query: any, options?: QueryOptions): Promise<any> {
    const records = await this.conditionallyApplyFilters(this.mongooseModel.find(query), options).exec();
    return this.mongooseModel.deleteMany({_id: {"$in": records.map(record => record._id)}});
  }

  private translateSearch(search: any) {
    const newSearch = {};

    for (const s in search) {
      if (!Object.prototype.hasOwnProperty.call(search, s)) {
        continue
      }

      const fieldType = this.model.metadata.fieldTypeMap.get(s);
      switch (fieldType.type) {
        case "text":
          newSearch[s] = new RegExp(search[s], "i");
          break;
        case "number":
          if (typeof search[s] === "object" && !search[s].map) {
            newSearch[s] = {};
            if (search[s].min) {
              newSearch[s]["$gte"] = search[s].min;
            }
            if (search[s].max) {
              newSearch[s]["$lte"] = search[s].max;
            }
          } else {
            newSearch[s] = Number(search[s]);
          }
          break;
        default:
          newSearch[s] = search[s];
      }

      if (newSearch[s].map) {
        newSearch[s] = {"$in": newSearch[s]};
      }
    }

    return newSearch;
  }

  private conditionallyApplyFilters(query: Query<any, any>, options: QueryOptions = {}) {
    let newQuery = query;
    if (options.limit) {
      newQuery = newQuery.limit(options.limit);
    }
    if (options.sort) {
      newQuery = newQuery.sort(options.sort);
    }
    if (options.fromId) {
      newQuery = newQuery.and([{_id: {"$gt": options.fromId}}]);
    }
    return newQuery;
  }

  private normalizeRecords(records: Array<Document>) {
    return records.map(record => this.normalizeRecord(record));
  }

  private normalizeRecord(record: Document) {
    if (!record) {
      return null;
    }

    record.id = record._id;
    return record;
  }
}
