import should from "should";
import got, {HTTPError} from "got";
import {loginUser} from "../../utils/getCookieJar";
import {UserWithSingleRole} from "../../test-classes/server/user/UserWithSingleRole";
// import {UserWithMultiRole} from "../../test-classes/server/user/UserWithMultiRole";
import {ServerTestBase} from "../../test-bases/ServerTestBase";
import {
  getServerTestSuiteParametersForJWT, ServerTestSuiteParameter
} from "../../test-bases/getServerTestSuiteParameter";

function getRolesTestInstances(): Array<ServerTestSuiteParameter> {
  return [ UserWithSingleRole/*, UserWithMultiRole*/ ].map(userModel => {
    return getServerTestSuiteParametersForJWT(`${userModel.metadata.modelName}sTest`, userModel)[0];
  });
}

@ServerTestBase.ParameterizedSuite(getRolesTestInstances())
export class RolesTest extends ServerTestBase {
  private LoginUrl: string;
  private UpdateRoleUrl: string;
  private RestrictedModelUrl: string;

  @ServerTestBase.BeforeSuite()
  public async setupRolesTest() {
    this.LoginUrl = `${this.testSuiteParameter.ServerBaseUrl}/auth/login`;
    this.UpdateRoleUrl = `${this.testSuiteParameter.ServerBaseUrl}/auth/updateRole`;
    this.RestrictedModelUrl = `${this.testSuiteParameter.ServerBaseUrl}/api/restrictedModels`;
  }

  @ServerTestBase.Test()
  public async shouldClaimOnlyOneAdmin() {
    should(await this.authentication.claimAdmin({user: "a", pwd: "a", email: "a@a.com"})).be.ok();
    should(await this.authentication.claimAdmin({user: "b", pwd: "b", email: "b@b.com"})).be.not.ok();

    should(await this.getUsers()).eql([
      {user: "a", role: 0}, {user: "b", role: 3},
    ]);
  }

  @ServerTestBase.Test()
  public async shouldElevateRole() {
    const adminCookieJar = (await loginUser("a", "a", this.LoginUrl)).cookieJar;
    const userCookieJar = (await loginUser("b", "b", this.LoginUrl)).cookieJar;

    const users = await this.queryUsers();

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

  @ServerTestBase.Test()
  public async shouldHaveAtLeastOneAdmin() {
    const adminCookieJar = (await loginUser("a", "a", this.LoginUrl)).cookieJar;

    const users = await this.queryUsers();

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
    const users = await this.queryUsers();
    return users.map(user => {
      const userJson = user.toJSON();
      return {
        user: userJson.user,
        role: userJson.role,
      };
    });
  }

  private queryUsers() {
    return this.dataStore.dataStoreModelFactory.getDataStoreModel(this.userModel.metadata.modelName).query({});
  }
}
