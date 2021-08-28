import {AuthenticationConfig} from "./authentication/AuthenticationConfig";
import {RoutesConfig} from "./routes/RoutesConfig";
import {Config} from "../utils/Config";

export class ServerConfig extends Config<ServerConfig> {
  @Config.ConfigField()
  public readonly port: number;
  @Config.ConfigField()
  public readonly host: string;
  @Config.ConfigField()
  public readonly publicAssets: string;
  @Config.SubConfig(AuthenticationConfig, {})
  public readonly authentication: AuthenticationConfig;
  @Config.SubConfig(RoutesConfig, {})
  public readonly routes: RoutesConfig;
}
