import {Roles} from "./Roles";
import {UserModel} from "../../../../src/models/UserModel";
import {RoleField} from "../../../../src/models/server-metadata/RoleField";
import {ServerModelMetadata} from "../../../../src/models/server-metadata/ServerModelMetadata";
import {SelectField} from "../../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model({
  readRole: Roles.Admin,
  writeRole: Roles.Admin,
})
@ModelMetadata.Model()
export class User extends UserModel {
  @RoleField({admin: Roles.Admin, default: Roles.User})
  @SelectField({opts: Roles, subType: "number"})
  public role: Roles;
}
