import {Roles} from "./Roles";
import {UserModel} from "../../../../src/models/UserModel";
import {RoleField} from "../../../../src/models/server-metadata/RoleField";
import {SelectField} from "../../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";

@ModelMetadata.Model()
export class UserWithSingleRole extends UserModel {
  @RoleField({admin: Roles.Admin, default: Roles.User, invitee: Roles.Invitee})
  @SelectField({opts: Roles, subType: "number"})
  public role: Roles;
}
