import should from "should";
import {ConfigTestBase} from "../../test-classes/models/ConfigTestBase";
import {TestBase} from "@adityahegde/typescript-test-utils";
import {MochaTestLibrary} from "@adityahegde/typescript-test-utils/dist/mocha/MochaTestLibrary";

@TestBase.Suite
@TestBase.TestLibrary(MochaTestLibrary)
export class ConfigSpec extends TestBase {
  @TestBase.Test()
  public shouldPopulateConfig() {
    const config = new ConfigTestBase({
      subConfig: {
        config: "subConfig_config",
        configWithDefault: "subConfig_configWithDefault",
        configWithKey: "subConfig_configWithKey",
        configWithKeyVal: "subConfig_configWithKeyVal",
      },
      subConfigWithKeyVal: {
        config: "subConfigWithKeyVal_config",
      },
    });
    should(JSON.parse(JSON.stringify(config))).be.eql({
      subConfig: {
        config: "subConfig_config",
        configWithDefault: "subConfig_configWithDefault",
        configWithKey: "subConfig_configWithKeyVal"
      },
      subConfigWithDefault: {
        config: "subConfigWithDefault_config",
        configWithDefault: "defaultVal",
        configWithKey: null
      },
      subConfigWithKey: {
        config: "subConfigWithKeyVal_config",
        configWithDefault: "defaultVal",
        configWithKey: null
      }
    });
  }
}
