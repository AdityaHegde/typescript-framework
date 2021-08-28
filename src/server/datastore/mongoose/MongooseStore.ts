import {DataStore} from "../DataStore";
import mongoose, {Mongoose} from "mongoose";
import {DataStoreModelFactory} from "../DataStoreModelFactory";
import {Log} from "../../logging/LoggerBase";
import MongoStore from "connect-mongo";

export type MongooseConfig = {
  connectionUrl: string;
  dbName: string;
}

@Log
export class MongooseStore extends DataStore {
  private mongoose: Mongoose;
  private readonly  config: MongooseConfig;

  constructor(dataStoreModelFactory: DataStoreModelFactory, config: MongooseConfig) {
    super(dataStoreModelFactory);
    this.config = config;
  }

  public async connect(): Promise<void> {
    this.mongoose = await mongoose.connect(this.config.connectionUrl, {
      dbName: this.config.dbName,
    });

    this.logger.info("Connected to mongo db");

    await this.dataStoreModelFactory.init();
  }

  public async disconnect(): Promise<void> {
    await this.mongoose.disconnect();
  }

  public getSessionStore(): any {
    return new MongoStore({
      dbName: this.config.dbName,
      client: this.mongoose.connection.getClient(),
    });
  }
}
