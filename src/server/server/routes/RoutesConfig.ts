import {Config} from "../../../utils/Config";

export class RoutesConfig extends Config<RoutesConfig> {
  @Config.ConfigField(25)
  public readonly recordsResultLimit: number;
}
