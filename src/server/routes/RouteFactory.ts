import {Route} from "./Route";
import {Application, Router} from "express";
import {DataStoreModelFactory} from "../datastore/DataStoreModelFactory";
import {Authentication} from "../authentication/Authentication";
import {RoutesConfig} from "./RoutesConfig";
import { ModelList } from "../../models/ModelList";

const API_BASE = "api";

export class RouteFactory {
  protected routeClass: typeof Route;
  protected routesConfig: RoutesConfig
  protected authentication: Authentication;
  protected routes = new Map<string, Route>();

  constructor(routeClass: typeof Route, routesConfig: RoutesConfig, authentication: Authentication) {
    this.routeClass = routeClass;
    this.routesConfig = routesConfig;
    this.authentication = authentication;
  }

  public initRouteInstances(dataStoreModelFactory: DataStoreModelFactory) {
    ModelList.forEach((model) => {
      if (!model.serverMetadata) {
        return;
      }
      const route = new this.routeClass(model, this.routesConfig, this,
        dataStoreModelFactory.getDataStoreModel(model.metadata.modelName),
        this.authentication, API_BASE);
      this.routes.set(model.metadata.modelName, route);
    });
  }

  public async init(app: Application) {
    const router = Router();

    await Promise.all(ModelList.map(async (model) => {
      const route = this.routes.get(model.metadata.modelName);
      if (route) {
        await route.init(router);
      }
    }));

    app.use(router);
  }

  public getRoute(modelName: string) {
    return this.routes.get(modelName);
  }
}
