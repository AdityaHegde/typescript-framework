import {DataStoreModelFactory} from "./DataStoreModelFactory";
import {LoggerBase} from "../logging/LoggerBase";

export abstract class DataStore extends LoggerBase {
  dataStoreModelFactory: DataStoreModelFactory;

  constructor(dataStoreModelFactory: DataStoreModelFactory) {
    super();
    this.dataStoreModelFactory = dataStoreModelFactory;
  }

  public abstract connect(): Promise<void>;
  public abstract disconnect(): Promise<void>;
  public abstract getSessionStore(): any;
}
