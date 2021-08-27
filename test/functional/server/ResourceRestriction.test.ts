import got, {HTTPError} from "got";
import should from "should";
import {getInstances, InstancesType} from "../../test-bases/getInstances";
import {JwtMongooseTestBase} from "../../test-bases/JwtMongooseTestBase";
import {PublicModel} from "../../test-classes/server/bootstrap/PublicModel";
import {ServerParameterizedTestBase} from "../../test-bases/ServerParameterizedTestBase";
import {RestrictedModel} from "../../test-classes/server/bootstrap/RestrictedModel";
import {PartialRestrictedModel} from "../../test-classes/server/bootstrap/PartialRestrictedModel";
import {UserLockedModel} from "../../test-classes/server/UserLockedModel";
import {loginUser} from "../../utils/getCookieJar";
import {LoggedInModel} from "../../test-classes/server/bootstrap/LoggedInModel";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";
import {sanitize} from "../../data/mongoose";
import { User } from "../../test-classes/server/user/User";

const TestModels = [
  PublicModel,
  LoggedInModel,
  PartialRestrictedModel,
  RestrictedModel,
];

@JwtMongooseTestBase.StaticSuite
export class ResourceRestrictionTest extends ServerParameterizedTestBase {
  private resources = new Map<string, Array<any>>();
  private users: Array<User>;
  private LoginUrl = "auth/login";

  @JwtMongooseTestBase.BeforeSuite()
  public async setupResourceRestrictionTest() {
    console.log("ResourceRestrictionTest")
    this.LoginUrl = `${this.ServerBaseUrl}/${this.LoginUrl}`;

    await Promise.all([
      ["a", 1], ["b", 2],
    ].map(([label, role]) => {
      return got.post(`${this.ServerBaseUrl}/auth/signup`,
        {json: {user: label, email: `${label}@${label}.com`, pwd: label, role}})
    }));
    this.users = await this.dataStore.dataStoreModelFactory.getDataStoreModel(User.metadata.modelName).query({});

    await Promise.all(TestModels.map(async (model) => {
      const modelStore = this.dataStore.dataStoreModelFactory.getDataStoreModel(model.metadata.modelName);
      this.resources.set(model.metadata.modelName, await modelStore.query({}));
    }));
  }

  public restrictTestDataProvider() {
    return {
      subData: [{
        title: "Mod User",
        subData: this.generateTestDataForUser("a", [true, true, true, true], [true, true, true, true]),
      }, {
        title: "Generic User",
        subData: this.generateTestDataForUser("b", [true, true, true, false], [true, true, false, false]),
      }, {
        title: "No user",
        subData: this.generateTestDataForUser("", [true, false, false, false], [true, false, false, false]),
      }]
    }
  }

  // @JwtMongooseTestBase.Test("restrictTestDataProvider")
  public async shouldRestrictUnauthorizedUsers(
    user: string, modelMetadata: ModelMetadata, operation: ("getAll" | "create" | "update" | "delete"), shouldSucceed: boolean,
  ) {
    let {cookieJar} = await loginUser(user, user, this.LoginUrl);

    const id = this.resources.get(modelMetadata.modelName)[0].id;

    let error;
    try {
      switch (operation) {
        case "getAll":
          await got.get(`${this.ServerBaseUrl}/api/${modelMetadata.apiPath}`,
            {cookieJar, retry: 0});
          break;
        case "create":
          await got.post(`${this.ServerBaseUrl}/api/${modelMetadata.apiPath}`,
            {json: {data: {type: modelMetadata.modelName, attributes: {label: "new"}}}, cookieJar, retry: 0});
          break;
        case "update":
          await got.put(`${this.ServerBaseUrl}/api/${modelMetadata.apiPath}/${id}`,
            {json: {data: {type: modelMetadata.modelName, attributes: {label: "update"}}}, cookieJar, retry: 0});
          break;
      }
    } catch (err) {
      console.log(err.message);
      error = err;
    }
    if (shouldSucceed) {
      should(error).be.undefined();
    } else {
      should(error).be.instanceof(HTTPError);
    }
  }

  @JwtMongooseTestBase.Test()
  public async shouldRestrictNonOwners() {
    const metadata = UserLockedModel.metadata;
    const ApiBase = `${this.ServerBaseUrl}/api/${metadata.apiPath}`;

    const loginUser0 = await loginUser(this.users[0].user, this.users[0].user, this.LoginUrl);
    const loginUser1 = await loginUser(this.users[1].user, this.users[1].user, this.LoginUrl);

    const getRecords = async () => {
      return sanitize(await got.get(ApiBase, {cookieJar: loginUser0.cookieJar, retry: 0}));
    }
    const initialRecords = await getRecords();

    const resp = await got.post(ApiBase,
      {json: {data: {type: metadata.modelName, attributes: {label: "new"}}}, cookieJar: loginUser0.cookieJar, retry: 0});
    const record = JSON.parse(resp.body);
    should(await getRecords()).be.eql([
      ...initialRecords,
      {id: "<ID>", type: "UserLockedModel", attributes: { label: "new", userId: this.users[0].id.toString() }},
    ]);

    let error;
    try {
      await got.put(`${ApiBase}/${record.data.id}`,
        {json: {data: {type: metadata.modelName, attributes: {label: "update_0"}}}, cookieJar: loginUser0.cookieJar, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();

    should(await getRecords()).be.eql([
      ...initialRecords,
      {id: "<ID>", type: "UserLockedModel", attributes: { label: "update_0", userId: this.users[0].id.toString() }},
    ]);

    try {
      await got.put(`${ApiBase}/${record.data.id}`,
        {json: {data: {type: metadata.modelName, attributes: {label: "update_1"}}}, cookieJar: loginUser1.cookieJar, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceof(HTTPError);

    should(await getRecords()).be.eql([
      ...initialRecords,
      {id: "<ID>", type: "UserLockedModel", attributes: { label: "update_0", userId: this.users[0].id.toString() }},
    ]);
  }

  private generateTestDataForUser(user: string, queryable: Array<boolean>, editable: Array<boolean>) {
    return TestModels.map((model, index) => {
      return {
        title: model.metadata.modelName,
        subData: this.generateTestDataForModel(user, model.metadata, queryable[index], editable[index]),
      };
    });
  }

  private generateTestDataForModel(user: string, modelMetadata: ModelMetadata, queryable: boolean, editable: boolean) {
    return [{
      title: `should${queryable ? "Succeed": "Fail"}GetAll`,
      args: [user, modelMetadata, "getAll", queryable],
    }, {
      title: `should${editable ? "Succeed": "Fail"}Create`,
      args: [user, modelMetadata, "create", editable],
    }, {
      title: `should${editable ? "Succeed": "Fail"}Update`,
      args: [user, modelMetadata, "update", editable],
    }];
  }
}

getInstances().forEach(({title, dataStore, routeFactory,
                          serverConfig, authentication, bootstrapData}: InstancesType) => {
  new ResourceRestrictionTest(`${title}ResourceRestrictionTest`, dataStore, routeFactory,
    serverConfig, authentication, bootstrapData).test();
});
