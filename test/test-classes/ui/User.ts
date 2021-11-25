import {Roles} from "./Roles";
import {ModelMetadata, RoleField, SelectField, ServerModelMetadata, UserModel} from "../../../src/models";

@ServerModelMetadata.Model({
  readRole: Roles.Admin,
  writeRole: Roles.Admin,
})
@ModelMetadata.Model()
export class User extends UserModel {
  @RoleField({admin: Roles.Admin, default: Roles.User})
  @SelectField({opts: Roles, subType: "number"})
  public role: Roles;

  public static getData() {
    return [];
  }
}
