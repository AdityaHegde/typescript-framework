import config from "config";
import {UserInvite} from "../../src/models/UserInvite";
import {MongooseStore, MongooseStoreModelFactory} from "../../src/server/datastore/mongoose";
import {User} from "../test-classes/ui/User";
import {DataStoreModelFactory} from "../../src/server/datastore/DataStoreModelFactory";
import {SessionAuthentication} from "../../src/server/authentication/session";
import {ServerConfig} from "../../src/server/ServerConfig";
import {Authentication} from "../../src/server/authentication/Authentication";
import {JsonApiRoute} from "../../src/server/routes/JsonApiRoute";
import {DataStore} from "../../src/server/datastore/DataStore";
import {JwtAuthentication} from "../../src/server/authentication/jwt";
import {RouteFactory} from "../../src/server/routes/RouteFactory";
import {bootstrapMongooseData} from "../data/mongoose";

const serverConfig = new ServerConfig({
  port: config.get("server.port"), publicAssets: __dirname + "/public",
  authentication: {
    inviteOnly: false,
    sessionSecret: process.env.SESSION_SECRET,
  },
  routes: {
    recordsResultLimit: config.get("server.routes.recordsResultLimit")
  }
});
const dataStore = new MongooseStore(new MongooseStoreModelFactory(), {
  connectionUrl: config.get("mongodb.connectionUrl"),
  dbName: config.get("mongodb.dbName"),
});

const jwtAuthentication = new JwtAuthentication(serverConfig.authentication, User, UserInvite);
const jwtAuthApiRoute = new RouteFactory(JsonApiRoute, serverConfig.routes, jwtAuthentication);

const sessionAuthentication = new SessionAuthentication(serverConfig.authentication, User, UserInvite);
const sessionAuthApiRoute = new RouteFactory(JsonApiRoute, serverConfig.routes, sessionAuthentication);

export type BootstrapDataType = (dataStoreModelFactory: DataStoreModelFactory) => Promise<void>;
export type InstancesType = {
  title: string;
  serverConfig: ServerConfig;
  authentication: Authentication;
  dataStore: DataStore;
  routeFactory: RouteFactory;
  bootstrapData: BootstrapDataType;
}

export function getInstances(): Array<InstancesType> {
  return [{
    title: "JwtMongoose",
    serverConfig, authentication: jwtAuthentication, dataStore,
    routeFactory: jwtAuthApiRoute, bootstrapData: bootstrapMongooseData,
  }, {
    title: "SessionMongoose",
    serverConfig, authentication: sessionAuthentication, dataStore,
    routeFactory: sessionAuthApiRoute, bootstrapData: bootstrapMongooseData,
  }]
}
