import should from "should";
import got, {HTTPError} from "got";
import {UserInvite} from "../../../src/models/UserInvite";
import {BootstrapDataType, getInstances} from "../../test-bases/getInstances";
import {JwtMongooseTestBase} from "../../test-bases/JwtMongooseTestBase";
import {ServerParameterizedTestBase} from "../../test-bases/ServerParameterizedTestBase";
import {UserModel} from "../../../src/models/UserModel";
import {ServerConfig} from "../../../src/server/server/ServerConfig";
import {loginUser} from "../../utils/getCookieJar";
import {DataStore} from "../../../src/server/datastore/DataStore";
import {JsonApiRoute} from "../../../src/server/server/routes/JsonApiRoute";
import {JwtAuthentication} from "../../../src/server/server/authentication/jwt";
import {RouteFactory} from "../../../src/server/server/routes/RouteFactory";
import { UserWithSingleRole } from "../../test-classes/server/user/UserWithSingleRole";

@ServerParameterizedTestBase.StaticSuite
export class RolesTest extends ServerParameterizedTestBase {
  private LoginUrl: string;
  private UpdateRoleUrl: string;
  private RestrictedModelUrl: string;
  protected userModel: typeof UserModel;

  constructor(suiteTitle: string, dataStore: DataStore, serverConfig: ServerConfig,
              bootstrapData: BootstrapDataType, userModel: typeof UserModel) {
    const authentication = new JwtAuthentication(serverConfig.authentication, userModel, UserInvite);
    super(suiteTitle, dataStore, new RouteFactory(JsonApiRoute, serverConfig.routes, authentication),
      serverConfig, authentication, bootstrapData);
    this.userModel = userModel;
  }

  @JwtMongooseTestBase.BeforeSuite()
  public async setupRolesTest() {
    this.LoginUrl = `${this.ServerBaseUrl}/auth/login`;
    this.UpdateRoleUrl = `${this.ServerBaseUrl}/auth/updateRole`;
    this.RestrictedModelUrl = `${this.ServerBaseUrl}/api/restrictedModels`;
  }

  @ServerParameterizedTestBase.Test()
  public async shouldClaimOnlyOneAdmin() {
    should(await this.authentication.claimAdmin({user: "a", pwd: "a", email: "a@a.com"})).be.ok();
    should(await this.authentication.claimAdmin({user: "b", pwd: "b", email: "b@b.com"})).be.not.ok();

    should(await this.getUsers()).eql([
      {user: "a", role: 0}, {user: "b", role: 3},
    ]);
  }

  @ServerParameterizedTestBase.Test()
  public async shouldElevateRole() {
    const adminCookieJar = (await loginUser("a", "a", this.LoginUrl)).cookieJar;
    const userCookieJar = (await loginUser("b", "b", this.LoginUrl)).cookieJar;

    const users = await this.dataStore.dataStoreModelFactory.getDataStoreModel(this.userModel.metadata.modelName).query({})

    let error;
    try {
      await got.get(this.RestrictedModelUrl, {cookieJar: userCookieJar});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceof(HTTPError);

    await got.post(this.UpdateRoleUrl, {cookieJar: adminCookieJar, json: {userId: users[1]._id.toString(), newRole: 1}});
    try {
      await got.get(this.RestrictedModelUrl, {cookieJar: userCookieJar});
      error = undefined;
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
  }

  @ServerParameterizedTestBase.Test()
  public async shouldHaveAtLeastOneAdmin() {
    const adminCookieJar = (await loginUser("a", "a", this.LoginUrl)).cookieJar;

    const users = await this.dataStore.dataStoreModelFactory.getDataStoreModel(this.userModel.metadata.modelName).query({})

    let error;
    try {
      await got.post(this.UpdateRoleUrl, {cookieJar: adminCookieJar, json: {userId: users[1]._id.toString(), newRole: 0}});
      error = undefined;
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
    try {
      await got.post(this.UpdateRoleUrl, {cookieJar: adminCookieJar, json: {userId: users[1]._id.toString(), newRole: 1}});
      error = undefined;
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
    try {
      await got.post(this.UpdateRoleUrl, {cookieJar: adminCookieJar, json: {userId: users[0]._id.toString(), newRole: 1}});
      error = undefined;
    } catch (err) {
      error = err;
    }
    should(error).be.instanceof(HTTPError);
  }

  private async getUsers() {
    const users = await this.dataStore.dataStoreModelFactory.getDataStoreModel(this.userModel.metadata.modelName).query({});
    return users.map(user => {
      const userJson = user.toJSON();
      return {
        user: userJson.user,
        role: userJson.role,
      };
    });
  }
}

const {dataStore, serverConfig, bootstrapData} = getInstances()[0];
[ UserWithSingleRole/*, UserWithMultiRole */].forEach((userModel) =>
  new RolesTest(`RolesTest for ${userModel.metadata.modelName}`, dataStore, serverConfig,
    bootstrapData, userModel).test());
