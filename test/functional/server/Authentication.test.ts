import got, {HTTPError} from "got";
import should from "should";
import {getCookieJar, loginUser} from "../../utils/getCookieJar";
import {sanitize} from "../../data/mongoose";
import {ServerTestBase} from "../../test-bases/ServerTestBase";
import {getServerTestSuiteParametersForEveryAuth} from "../../test-bases/getServerTestSuiteParameter";

@ServerTestBase.ParameterizedSuite(getServerTestSuiteParametersForEveryAuth("AuthenticationTest"))
export class AuthenticationTest extends ServerTestBase {
  private LoginUrl = "auth/login";
  private SignupUrl = "auth/signup";
  private LogoutUrl = "auth/logout";
  private UserUrl = "auth/user";

  @ServerTestBase.BeforeSuite()
  public async setupJwtAuthenticationTest() {
    this.LoginUrl = `${this.testSuiteParameter.ServerBaseUrl}/${this.LoginUrl}`;
    this.SignupUrl = `${this.testSuiteParameter.ServerBaseUrl}/${this.SignupUrl}`;
    this.LogoutUrl = `${this.testSuiteParameter.ServerBaseUrl}/${this.LogoutUrl}`;
    this.UserUrl = `${this.testSuiteParameter.ServerBaseUrl}/${this.UserUrl}`;

    await got.post(this.SignupUrl, {json: {user: "t", email: "t@t.com", pwd: "t"}});
  }

  @ServerTestBase.Test()
  public async testLoginFailure() {
    let error: Error;
    try {
      await got.post(this.LoginUrl, {json: {user: "x", pwd: "x"}, retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);
  }

  @ServerTestBase.Test()
  public async testRestrictedAccessFailure() {
    let error: Error;
    try {
      await got.get(this.UserUrl, {retry: 0});
    } catch (err) {
      error = err;
    }
    should(error).be.instanceOf(HTTPError);
  }

  @ServerTestBase.Test()
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

  @ServerTestBase.Test()
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
