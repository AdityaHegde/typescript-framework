import {Roles} from "./user/Roles";
import {ModelSelectField, TextField} from "../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../src/models/BaseType";
import {DisplayField} from "../../../src/models/metadata/DisplayField";
import {UserField} from "../../../src/models/server-metadata/UserField";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

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