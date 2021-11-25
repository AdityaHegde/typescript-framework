import config from "config";
import {getMongooseStore} from "../../src/server/datastore/mongoose";
import {getJwtAuthentication} from "../../src/server/authentication/jwt";
import {getSessionAuthentication} from "../../src/server/authentication/session";
import {ServerConfig, Server} from "../../src/server";
import {UserInvite, UserModel} from "../../src/models";
import {User} from "../test-classes/server/user/User";
import {TestSuiteSetup} from "@adityahegde/typescript-test-utils/dist/TestSuiteSetup";
import {bootstrapMongooseData} from "../data/mongoose";
import {getPortByTestSuite} from "./getPortByTestSuite";

export enum AuthType {
  JWT = "JWT",
  Session = "Session",
}

const AuthTypeToGetter = {
  [AuthType.JWT]: getJwtAuthentication,
  [AuthType.Session]: getSessionAuthentication,
}

export type BootstrapDataType = (serverTestSuiteParameter: ServerTestSuiteParameter) => Promise<void>;
export type InstancesType = {
  suiteTitle: string;
  bootstrapData: BootstrapDataType;
  server: Server;
}
export type ServerTestSuiteParameter = {
  suiteTitle: string;
  TestSuiteSetupClasses?: Array<typeof TestSuiteSetup>;
} & InstancesType & {
  ServerBaseUrl?: string;

  userRoleData?: Array<any>;
  loginUser?: {user: string, pwd: string};
};

const DUMMY_PUBLIC_PATH = "/tmp/public";

export function getServerTestSuiteParameter(
  titleSuffix = "", port: number, publicAssets: string, authType: AuthType, userModel: typeof UserModel = User,
): ServerTestSuiteParameter {
  const serverConfig = new ServerConfig({
    port, publicAssets,
    authentication: {
      inviteOnly: false,
      sessionSecret: process.env.SESSION_SECRET,
    },
    routes: {
      recordsResultLimit: 5,
    }
  });
  const dataStore = getMongooseStore({
    connectionUrl: config.get("mongodb.connectionUrl"),
    dbName: config.get("mongodb.dbName") + port,
  });
  const {authentication, routeFactory} = AuthTypeToGetter[authType](serverConfig.authentication, serverConfig.routes, userModel, UserInvite);
  const server = new Server(serverConfig, dataStore, authentication, routeFactory);
  return {
    suiteTitle: `${authType}Mongoose ${titleSuffix}`,
    bootstrapData: bootstrapMongooseData,
    server,
  }
}

export function getServerTestSuiteParametersForEveryAuth(
  titleSuffix = "", userModel: typeof UserModel = User
): Array<ServerTestSuiteParameter> {
  return [AuthType.JWT, AuthType.Session].map(authType =>
    getServerTestSuiteParameter(titleSuffix, getPortByTestSuite(titleSuffix), DUMMY_PUBLIC_PATH, authType, userModel));
}

export function getServerTestSuiteParametersForJWT(
  titleSuffix = "", userModel: typeof UserModel = User,
): Array<ServerTestSuiteParameter> {
  return [getServerTestSuiteParameter(titleSuffix, getPortByTestSuite(titleSuffix), DUMMY_PUBLIC_PATH, AuthType.JWT, userModel)];
}
