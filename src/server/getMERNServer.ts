import config from "config";
import {ServerConfig} from "./ServerConfig";
import {getMongooseStore} from "./datastore/mongoose";
import {addModelsToList, BaseType, UserInvite, UserModel} from "../models";
import {getSessionAuthentication} from "./authentication/session";
import {Server} from "./Server";

export function getMERNServer(publicAssets: string, userModel: typeof UserModel, allModels: Array<typeof BaseType>) {
  addModelsToList(allModels);

  const serverConfig = new ServerConfig({
    port: config.get<number>("server.port"), publicAssets,
    authentication: {
      inviteOnly: config.get<boolean>("server.authentication.inviteOnly"),
      sessionSecret: process.env.SESSION_SECRET,
    },
    routes: {
      recordsResultLimit: config.get<number>("server.routes.recordsResultLimit"),
    }
  });

  const dataStore = getMongooseStore({
    connectionUrl: config.get("mongodb.connectionUrl"),
    dbName: config.get("mongodb.dbName"),
  });

  const {authentication, routeFactory} =
    getSessionAuthentication(serverConfig.authentication, serverConfig.routes, userModel, UserInvite);

  return new Server(serverConfig, dataStore, authentication, routeFactory);
}
