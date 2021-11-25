import {Roles} from "./Roles";
import {ModelMetadata, MultiSelectField, RoleField, UserModel} from "../../../../src/models";

@ModelMetadata.Model()
export class UserWithMultiRole extends UserModel {
  @RoleField({admin: Roles.Admin, default: [Roles.User], invitee: Roles.Invitee, isSet: true})
  @MultiSelectField({opts: Roles, subType: "number"})
  public role: Array<Roles> = null;
}
