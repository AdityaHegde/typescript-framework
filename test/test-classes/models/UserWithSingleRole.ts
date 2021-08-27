import {Field3Enum} from "./Field3Enum";
import {UserModel} from "../../../src/models/UserModel";
import {RoleField} from "../../../src/models/server-metadata/RoleField";
import {SelectField} from "../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

@ModelMetadata.Model()
export class UserWithSingleRole extends UserModel {
  @RoleField({admin: Field3Enum.F3Enum1})
  @SelectField({opts: Field3Enum})
  public role: Field3Enum = null;
}
