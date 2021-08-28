import {UserRole} from "./UserRole";
import {ModelMetadata, RoleField, SelectField, ServerModelMetadata, UserModel} from "../../src/models";

@ServerModelMetadata.Model({
  readRole: UserRole.Admin,
  writeRole: UserRole.Admin,
})
@ModelMetadata.Model()
export class User extends UserModel {
  @RoleField({admin: UserRole.Admin, default: [UserRole.User], isSet: true})
  @SelectField({opts: UserRole})
  public role: Array<UserRole> = null;
}
