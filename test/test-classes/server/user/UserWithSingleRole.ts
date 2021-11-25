import {Roles} from "./Roles";
import {ModelMetadata, RoleField, SelectField, UserModel} from "../../../../src/models";

@ModelMetadata.Model()
export class UserWithSingleRole extends UserModel {
  @RoleField({admin: Roles.Admin, default: Roles.User, invitee: Roles.Invitee})
  @SelectField({opts: Roles, subType: "number"})
  public role: Roles;
}
