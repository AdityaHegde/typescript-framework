import {BaseType} from "./BaseType";
import {Validation} from "./validation-metadata/Validation";
import {DisplayField} from "./metadata/DisplayField";
import {Restricted} from "./metadata/Restricted";
import {TextField} from "./metadata/Fields";
import {ServerField} from "./server-metadata/ServerField";

export class UserModel extends BaseType {
  @ServerField({unique: true, index: true})
  @Validation({required: true})
  @DisplayField()
  @TextField({label: "User Name"})
  public user: string;

  @ServerField({unique: true, index: true})
  @Validation({required: true, email: true})
  @TextField({label: "Email ID"})
  public email: string;

  @Validation({required: true, email: true})
  @Restricted()
  @TextField({label: "Password"})
  public pwd: string;

  public static getUserRoleChecker(role: any): (user: UserModel) => boolean {
    if (!this.serverMetadata?.roleFieldType?.field) {
      return () => false;
    }

    if (this.serverMetadata.roleFieldType.isSet) {
      // if checked role is array, make sure userRole has all the entries
      // else just a single indexOf on userRole is enough
      const hasRoleChecker = role.every ? (userRole) => {
        return (role as Array<any>).every(r => userRole.indexOf(r) >= 0);
      } : (userRole) => userRole.indexOf(role) >= 0;

      return (user: UserModel) => {
        const userRole = user?.[this.serverMetadata.roleFieldType.field];
        return userRole !== undefined &&
          (userRole.indexOf(this.serverMetadata.roleFieldType.admin) >= 0 || hasRoleChecker(userRole));
      }
    } else {
      return (user: UserModel) => {
        const userRole = user?.[this.serverMetadata.roleFieldType.field];
        return userRole !== undefined && userRole <= role;
      }
    }
  }
}
