import {Config} from "../../../src/utils/Config";

export class ConfigTestChild extends Config<ConfigTestChild> {
  @Config.ConfigField()
  public readonly config: string;

  @Config.ConfigField("defaultVal")
  public readonly configWithDefault: string;

  @Config.ConfigField(null, "configWithKeyVal")
  public readonly configWithKey: string;
}
