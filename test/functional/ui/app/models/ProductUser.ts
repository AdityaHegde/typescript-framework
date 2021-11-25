import {UserRole} from "./UserRole";
import {
  ModelMetadata,
  MultiSelectField,
  RoleField,
  ServerModelMetadata,
  UserModel
} from "../../../../../src/models";

@ServerModelMetadata.Model({
  readRole: UserRole.Admin,
  writeRole: UserRole.Admin,
})
@ModelMetadata.Model()
export class ProductUser extends UserModel {
  @RoleField({admin: UserRole.Admin, default: [UserRole.User], isSet: true})
  @MultiSelectField({opts: UserRole, subType: "number"})
  public role: Array<UserRole> = null;
}
