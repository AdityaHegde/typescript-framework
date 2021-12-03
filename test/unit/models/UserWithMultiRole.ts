import {Field3Enum} from "./Field3Enum";
import {ModelMetadata, MultiSelectField, RoleField, UserModel} from "../../../src/models";

@ModelMetadata.Model()
export class UserWithMultiRole extends UserModel {
  @RoleField({admin: Field3Enum.F3Enum1, isSet: true})
  @MultiSelectField({opts: Field3Enum})
  public role: Array<Field3Enum> = null;
}
