#!/usr/bin/env node

import config from "config";

import {Models} from "../models/Models";
import {User} from "../models/User";
import {addModelsToList, UserInvite} from "../../src/models";
import {JsonApiRoute, RouteFactory, Server, ServerConfig} from "../../src/server";
import {MongooseStore, MongooseStoreModelFactory} from "../../src/server/datastore/mongoose";
import {JwtAuthentication} from "../../src/server/authentication/jwt";

addModelsToList(Models);

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
const authentication = new JwtAuthentication(serverConfig.authentication, User, UserInvite);
const server = new Server(
  serverConfig,
  new MongooseStore(new MongooseStoreModelFactory(), {
    connectionUrl: config.get("mongodb.connectionUrl"),
    dbName: config.get("mongodb.dbName"),
  }),
  authentication,
  new RouteFactory(JsonApiRoute, serverConfig.routes, authentication),
);
server.start();
