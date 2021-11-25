import got from "got";
import should from "should";
import {PublicModel} from "../../test-classes/server/bootstrap/PublicModel";
import {sanitize} from "../../data/mongoose";
import {ServerTestBase} from "../../test-bases/ServerTestBase";
import {
  getServerTestSuiteParametersForJWT
} from "../../test-bases/getServerTestSuiteParameter";

@ServerTestBase.ParameterizedSuite(getServerTestSuiteParametersForJWT("MongooseStoreTest"))
export class MongooseStoreTest extends ServerTestBase {
  protected static readonly InitialModels = [
    {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_0"}},
    {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_1"}},
    {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_2"}},
  ];
  protected PublicModelApiBase = "api/publicModels";

  @ServerTestBase.BeforeSuite()
  public setupMongooseStoreTest() {
    this.PublicModelApiBase = `${this.testSuiteParameter.ServerBaseUrl}/${this.PublicModelApiBase}`;
  }

  @ServerTestBase.Test()
  public async shouldReturnModels() {
    await this.getAllAndAssert(MongooseStoreTest.InitialModels);
  }

  @ServerTestBase.Test()
  public async shouldCreateUpdateAndDeleteModel() {
    let createdId: string;
    const created = await sanitize(got.post(this.PublicModelApiBase, {
      json: {data: {"type":"PublicModel", "attributes":{"label":"PublicModel_new"}}}, responseType: "json",
    }), id => createdId = id);
    should(created).eql({"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_new"}});
    await this.getAllAndAssert([
      ...MongooseStoreTest.InitialModels,
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_new"}},
    ]);

    const updated = await sanitize(got.put(`${this.PublicModelApiBase}/${createdId}`, {
      json: {data: {"type":"PublicModel", "attributes":{"label":"PublicModel_updated"}}}, responseType: "json",
    }));
    should(updated).eql({"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_updated"}});
    await this.getAllAndAssert([
      ...MongooseStoreTest.InitialModels,
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_updated"}},
    ]);

    const deleted = await sanitize(got.delete(`${this.PublicModelApiBase}/${createdId}`));
    should(deleted).eql({"id":"<ID>","type":"PublicModel","attributes":{}});
    await this.getAllAndAssert(MongooseStoreTest.InitialModels);
  }

  @ServerTestBase.Test()
  public async updateAndDeleteMany() {
    const publicStoreModel = this.dataStore.dataStoreModelFactory.getDataStoreModel(PublicModel.metadata.modelName);

    for (let i = 0; i < 4; i++) {
      await publicStoreModel.create({label: `PublicModel_n`});
    }
    await this.getAllAndAssert([
      ...MongooseStoreTest.InitialModels,
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
    ]);

    await publicStoreModel.updateMany(
      {label: "PublicModel_n"}, {label: "PublicModel_n_u"}, {limit: 3},
    );
    await this.getAllAndAssert([
      ...MongooseStoreTest.InitialModels,
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n_u"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n_u"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n_u"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
    ]);

    await publicStoreModel.deleteMany(
      {label: "PublicModel_n_u"}, {limit: 2},
    );
    await this.getAllAndAssert([
      ...MongooseStoreTest.InitialModels,
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n_u"}},
      {"id":"<ID>","type":"PublicModel","attributes":{"label":"PublicModel_n"}},
    ]);

    // cleanup
    await publicStoreModel.deleteMany(
      {label: "PublicModel_n_u"},
    );
    await publicStoreModel.deleteMany(
      {label: "PublicModel_n"},
    );
    await this.getAllAndAssert(MongooseStoreTest.InitialModels);
  }

  private async getAllAndAssert(expectedData) {
    const models = await sanitize(got.get(`${this.PublicModelApiBase}/?pageSize=10`));
    should(models).eql(expectedData);
  }
}
