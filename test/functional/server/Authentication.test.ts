import got, {HTTPError} from "got";
import should from "should";
import {getInstances, InstancesType} from "../../test-bases/getInstances";
import {JwtMongooseTestBase} from "../../test-bases/JwtMongooseTestBase";
import {getCookieJar, loginUser} from "../../utils/getCookieJar";
import {ServerParameterizedTestBase} from "../../test-bases/ServerParameterizedTestBase";
import {sanitize} from "../../data/mongoose";

@JwtMongooseTestBase.ParameterizedSuite(
  getInstances().map(({title, dataStore, routeFactory, serverConfig, authentication, bootstrapData}: InstancesType) =>
    [`${title}AuthenticationTest`, dataStore, routeFactory, serverConfig, authentication, bootstrapData])
)
export class AuthenticationTest extends ServerParameterizedTestBase {
  private LoginUrl = "auth/login";
  private SignupUrl = "auth/signup";
  private LogoutUrl = "auth/logout";
  private UserUrl = "auth/user";

  @JwtMongooseTestBase.BeforeSuite()
  public async setupJwtAuthenticationTest() {
    this.LoginUrl = `${this.ServerBaseUrl}/${this.LoginUrl}`;
    this.SignupUrl = `${this.ServerBaseUrl}/${this.SignupUrl}`;
    this.LogoutUrl = `${this.ServerBaseUrl}/${this.LogoutUrl}`;
    this.UserUrl = `${this.ServerBaseUrl}/${this.UserUrl}`;

    await got.post(this.SignupUrl, {json: {user: "t", email: "t@t.com", pwd: "t"}});
  }

  @JwtMongooseTestBase.Test()
  public async testLoginFailure() {
    let error: Error;
    try {
      await got.post(this.LoginUrl, {json: {user: "x", pwd: "x"}, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);
  }

  @JwtMongooseTestBase.Test()
  public async testRestrictedAccessFailure() {
    let error: Error;
    try {
      await got.get(this.UserUrl, {retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);
  }

  @JwtMongooseTestBase.Test()
  public async testSignupAndLogin() {
    let error: Error;
    let resp: any;
    try {
      resp = await got.post(this.SignupUrl, {json: {user: "a", email: "a@a.com", pwd: "a"}, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
    should(await sanitize(resp)).be.eql({"id":"<ID>","type":"User","attributes":{"user":"a","email":"a@a.com","role":3}});

    try {
      resp = await got.post(this.LoginUrl, {json: {user: "a", pwd: "a"}, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
    should(await sanitize(resp)).be.eql({"id":"<ID>","type":"User","attributes":{"user":"a","email":"a@a.com","role":3}});
  }

  @JwtMongooseTestBase.Test()
  public async testLoginAndRestrictedAccessAndLogout() {
    let {error, resp, cookieJar} = await loginUser("t", "t", this.LoginUrl);
    should(error).be.undefined();
    should(await sanitize(resp)).be.eql({"id":"<ID>","type":"User","attributes":{"user":"t","email":"t@t.com","role":3}});

    try {
      resp = await got.get(this.UserUrl, {cookieJar, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.undefined();
    should(await sanitize(resp)).be.eql({"id":"<ID>","type":"User","attributes":{"user":"t","email":"t@t.com","role":3}});

    try {
      await got.get(this.UserUrl, {retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);

    cookieJar = await getCookieJar(await got.post(this.LogoutUrl, {cookieJar, retry: 0}));
    try {
      await got.get(this.UserUrl, {cookieJar, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);
  }
}
