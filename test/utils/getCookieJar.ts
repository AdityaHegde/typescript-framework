import {Cookie, CookieJar, MemoryCookieStore} from "tough-cookie";
import got from "got";
import {promisify} from "../../src/utils/promisify";

export async function getCookieJar(resp: any) {
  const cookieStore = new MemoryCookieStore();
  if (resp?.headers?.["set-cookie"]) {
    const cookies = resp.headers["set-cookie"].map(Cookie.parse);
    await promisify(cookieStore, cookieStore.putCookie, cookies[0]);
  }
  return new CookieJar(cookieStore);
}

export async function loginUser(user: string, pwd: string, loginPath: string) {
  let error: Error;
  let resp: any;
  let cookieJar;
  try {
    resp = await got.post(loginPath, {json: {user, pwd}, retry: 0});
    cookieJar = await getCookieJar(resp);
  } catch (err) {
    error = err;
  }

  return {error, resp, cookieJar};
}
