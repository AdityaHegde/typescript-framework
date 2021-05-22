import {Config} from "../../../utils/Config";

export class AuthenticationConfig extends Config<AuthenticationConfig> {
  @Config.ConfigField()
  public sessionSecret: string;
  @Config.ConfigField(false)
  public inviteOnly: boolean;
}
