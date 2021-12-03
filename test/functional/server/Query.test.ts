import got from "got";
import should from "should";
import {QueryTestModel} from "./models/QueryTestModel";
import {JSONRecordType, JSONResponse} from "../../../src/server";
import {sanitize} from "../../data/mongoose";
import {ServerTestBase} from "../../test-bases/ServerTestBase";
import {getServerTestSuiteParametersForJWT} from "../../test-bases/getServerTestSuiteParameter";

@ServerTestBase.ParameterizedSuite(getServerTestSuiteParametersForJWT("QueryTest"))
export class QueryTest extends ServerTestBase {
  protected QueryTestApiBase = "api/queryTestModels";
  protected records = new Array<any>();

  @ServerTestBase.BeforeSuite()
  public async setupQueryTest() {
    await this.dataStore.dataStoreModelFactory.getDataStoreModel(QueryTestModel.metadata.modelName).deleteMany({});

    this.QueryTestApiBase = `${this.testSuiteParameter.ServerBaseUrl}/${this.QueryTestApiBase}`;
    const rawRecords = [
      {label: "label_one", numField: 1, selectField: 0, multiSelectField: [0, 1], nonQueryableStr: "label_nq_one"},
      {label: "label_one", numField: 2, selectField: 0, multiSelectField: [0, 1], nonQueryableStr: "label_nq_two"},
      {label: "label_two", numField: 3, selectField: 1, multiSelectField: [1, 2], nonQueryableStr: "label_nq_three"},
      {label: "label_two", numField: 4, selectField: 1, multiSelectField: [1, 2], nonQueryableStr: "label_nq_one"},
      {label: "label_three", numField: 5, selectField: 2, multiSelectField: [2, 3], nonQueryableStr: "label_nq_two"},
      {label: "label_three", numField: 6, selectField: 2, multiSelectField: [2, 3], nonQueryableStr: "label_nq_three"},
      {label: "label_four", numField: 7, selectField: 3, multiSelectField: [3, 4], nonQueryableStr: "label_nq_four"},
      {label: "label_four", numField: 8, selectField: 3, multiSelectField: [3, 4], nonQueryableStr: "label_nq_five"},
      {label: "label_five", numField: 9, selectField: 4, multiSelectField: [4], nonQueryableStr: "label_nq_four"},
      {label: "label_five", numField: 10, selectField: 4, multiSelectField: [4], nonQueryableStr: "label_nq_five"},
    ];
    for (const attributes of rawRecords) {
      const resp = await got.post(this.QueryTestApiBase,
        {json: {data: {"type":"QueryTestModel", attributes}}, responseType: "json"});
      this.records.push((resp.body as any).data.attributes);
    }
  }

  public queryTestData() {
    return {
      subData: [{
        title: "labelQuery",
        args: ["label=one", [0, 1]],
      }, {
        title: "numberRangeQuery",
        args: ["numField[min]=3&numField[max]=4", [2, 3]],
      }, {
        title: "selectQuery",
        args: ["selectField=2", [4, 5]],
      }, {
        title: "selectMultiQuery",
        args: ["selectField[0]=1&selectField[1]=2", [2, 3, 4, 5]],
      }, {
        title: "nonQueryable",
        args: ["label=one&nonQueryableStr=two", [0, 1]],
      }],
    };
  }

  @ServerTestBase.Test("queryTestData")
  public async shouldReturnQueriedModels(query: string, modelIndexes: Array<number>) {
    const returnedRecords = await sanitize(got.get(`${this.QueryTestApiBase}/?${query}`));
    should(returnedRecords).have.length(modelIndexes.length);
    should(returnedRecords.map(rec => rec.attributes)).be.containDeep(modelIndexes.map(index => this.records[index]));
  }

  @ServerTestBase.Test()
  public async shouldLimitResults() {
    const resp: JSONResponse = (await got.get(`${this.QueryTestApiBase}/?selectField[0]=1&selectField[1]=3&selectField[2]=4`,
      {responseType: "json"})).body;
    should(resp.data).have.length(5);
    should((resp.data as Array<JSONRecordType>).map(rec => rec.attributes))
      .containDeep([this.records[2], this.records[3], ...this.records.slice(6, 9)]);

    const nextResp: JSONResponse = (await got.get(`${this.testSuiteParameter.ServerBaseUrl}${resp.links.next}`, {responseType: "json"})).body;
    should(nextResp.data).have.length(1);
    should((nextResp.data as Array<JSONRecordType>).map(rec => rec.attributes))
      .containDeep([this.records[9]]);
  }

  @ServerTestBase.Test()
  public async shouldLimitResultsWithPageSize() {
    const resp: JSONResponse = (await got.get(`${this.QueryTestApiBase}/?selectField[0]=0&selectField[1]=2&selectField[2]=4&pageSize=3`,
      {responseType: "json"})).body;
    should(resp.data).have.length(3);
    should((resp.data as Array<JSONRecordType>).map(rec => rec.attributes))
      .containDeep([this.records[0], this.records[1], this.records[4]]);

    const nextResp: JSONResponse = (await got.get(`${this.testSuiteParameter.ServerBaseUrl}${resp.links.next}`, {responseType: "json"})).body;
    should(nextResp.data).have.length(3);
    should((nextResp.data as Array<JSONRecordType>).map(rec => rec.attributes))
      .containDeep([this.records[5], this.records[8], this.records[9]]);
  }
}
