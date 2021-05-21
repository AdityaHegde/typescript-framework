import {Validation} from "./validation-metadata/Validation";
import {Field, TextField} from "./metadata/Fields";
import {ServerModelMetadata} from "./server-metadata/ServerModelMetadata";
import {Readonly} from "./metadata/Readonly";
import {BaseType} from "./BaseType";
import {ServerField} from "./server-metadata/ServerField";
import {ModelMetadata} from "./metadata/ModelMetadata";

@ServerModelMetadata.Model({skipRoutes: true})
@ModelMetadata.Model()
export class UserInvite extends BaseType {
  @ServerField({unique: true, index: true})
  @Validation({required: true, email: true})
  @TextField({label: "Email ID"})
  public email: string;

  @Readonly()
  @TextField()
  public inviteToken: string;

  @Readonly()
  @Field({type: "date"})
  public expiry: Date;
}
