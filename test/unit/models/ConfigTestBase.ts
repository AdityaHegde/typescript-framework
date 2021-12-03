import {ConfigTestChild} from "./ConfigTestChild";
import {Config} from "../../../src";

export class ConfigTestBase extends Config<ConfigTestBase> {
  @Config.SubConfig(ConfigTestChild)
  public readonly subConfig: ConfigTestChild;

  @Config.SubConfig(ConfigTestChild)
  public readonly subConfigNull: ConfigTestChild;

  @Config.SubConfig(ConfigTestChild, {config: "subConfigWithDefault_config"})
  public readonly subConfigWithDefault: ConfigTestChild;

  @Config.SubConfig(ConfigTestChild, null, "subConfigWithKeyVal")
  public readonly subConfigWithKey: ConfigTestChild;

  public readonly subConfigWithKeyVal: ConfigTestChild;
}
