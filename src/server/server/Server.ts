import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import {Authentication} from "./authentication/Authentication";
import {RouteFactory} from "./routes/RouteFactory";
import {DataStore} from "../datastore/DataStore";
import bodyParser from "body-parser";
import {Log, LoggerBase} from "../logging/LoggerBase";
import {ServerConfig} from "./ServerConfig";

@Log
export class Server extends LoggerBase {
  public readonly config: ServerConfig;
  protected readonly dataStore: DataStore;
  protected readonly authentication: Authentication;
  protected readonly routeFactory: RouteFactory;

  protected server: http.Server;
  protected app: express.Application;

  constructor(config: ServerConfig, dataStore: DataStore,
              authentication: Authentication, routeFactory: RouteFactory) {
    super();
    this.config = config;
    this.dataStore = dataStore;
    this.authentication = authentication;
    this.routeFactory = routeFactory;
  }

  public async start() {
    this.app = express();
    this.server = http.createServer(this.app);

    this.addMiddlewares();

    if (this.config.publicAssets) {
      this.app.use(express.static(this.config.publicAssets));
    }

    await this.dataStore.connect();
    this.routeFactory.initRouteInstances(this.dataStore.dataStoreModelFactory);
    await this.authentication.init(this.app, this.dataStore, this.routeFactory);
    await this.routeFactory.init(this.app);

    if (this.config.host) {
      this.server.listen(this.config.port, this.config.host, () => {
        this.logger.info(`Server started at http://${this.config.host}:${this.config.port}`);
      });
    } else {
      this.server.listen(this.config.port, () => {
        this.logger.info(`Server started at ${this.config.port}`);
      });
    }
  }

  public async stop() {
    await this.dataStore.disconnect();

    await new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  private addMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser(this.config.authentication.sessionSecret));
  }
}
