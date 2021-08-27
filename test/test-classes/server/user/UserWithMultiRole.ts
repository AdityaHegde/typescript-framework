import {Roles} from "./Roles";
import {UserModel} from "../../../../src/models/UserModel";
import {RoleField} from "../../../../src/models/server-metadata/RoleField";
import {MultiSelectField} from "../../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";

@ModelMetadata.Model()
export class UserWithMultiRole extends UserModel {
  @RoleField({admin: Roles.Admin, default: [Roles.User], invitee: Roles.Invitee, isSet: true})
  @MultiSelectField({opts: Roles, subType: "number"})
  public role: Array<Roles> = null;
}
