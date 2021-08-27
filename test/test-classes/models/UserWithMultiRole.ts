import {Field3Enum} from "./Field3Enum";
import {UserModel} from "../../../src/models/UserModel";
import {RoleField} from "../../../src/models/server-metadata/RoleField";
import {MultiSelectField} from "../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

@ModelMetadata.Model()
export class UserWithMultiRole extends UserModel {
  @RoleField({admin: Field3Enum.F3Enum1, isSet: true})
  @MultiSelectField({opts: Field3Enum})
  public role: Array<Field3Enum> = null;
}
