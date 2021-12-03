import {Field3Enum} from "./Field3Enum";
import {ModelMetadata, RoleField, SelectField, UserModel} from "../../../src/models";

@ModelMetadata.Model()
export class UserWithSingleRole extends UserModel {
  @RoleField({admin: Field3Enum.F3Enum1})
  @SelectField({opts: Field3Enum})
  public role: Field3Enum = null;
}
