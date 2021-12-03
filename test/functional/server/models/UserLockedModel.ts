import {Roles} from "./user/Roles";
import {
  BaseType,
  DisplayField,
  ModelMetadata,
  ModelSelectField,
  ServerModelMetadata,
  TextField,
  UserField
} from "../../../../src/models";

@ServerModelMetadata.Model({
  readRole: Roles.User,
  writeRole: Roles.User,
  ownerOnly: true,
})
@ModelMetadata.Model()
export class UserLockedModel extends BaseType {
  @DisplayField()
  @TextField()
  public label: string;

  @UserField()
  @ModelSelectField({ref: "User"})
  public userId: string;
}