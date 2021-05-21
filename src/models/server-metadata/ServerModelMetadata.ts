import {BaseType} from "../BaseType";
import {ServerFieldType} from "./ServerField";
import {RoleFieldType} from "./RoleField";
import {dedupeFieldTypes} from "../../utils/dedupeFieldTypes";

type ServerModelArgs = {
  readRole?: any;
  writeRole?: any;
  ownerOnly?: boolean;
  skipRoutes?: boolean;
}

export class ServerModelMetadata {
  public readRole: any;
  public writeRole: any;
  public ownerOnly: boolean;
  public userField: string;
  public skipRoutes: boolean;

  public fieldTypes = new Array<ServerFieldType>();
  public fieldTypesMap = new Map<string, ServerFieldType>();
  public roleFieldType: RoleFieldType;

  constructor(copyFrom: ServerModelMetadata) {
    if (copyFrom) {
      this.setRoles(copyFrom.readRole, copyFrom.writeRole);
      this.setOwnerOnly(copyFrom.ownerOnly);
      this.addUserField(copyFrom.userField);
      this.setSkipRoutes(copyFrom.skipRoutes);
      copyFrom.fieldTypes.forEach(serverField => this.addServerField(serverField));
    }
  }

  public setArgs({
    readRole, writeRole, ownerOnly,
  }: ServerModelArgs) {
    this.setRoles(readRole, writeRole);
    this.setOwnerOnly(ownerOnly);
  }

  public setRoles(readRole: any, writeRole: any) {
    this.readRole = readRole;
    this.writeRole = writeRole;
  }

  public setOwnerOnly(ownerOnly: boolean) {
    this.ownerOnly = ownerOnly;
  }

  public setSkipRoutes(skipRoutes: boolean) {
    this.skipRoutes = skipRoutes;
  }

  public addUserField(field: string) {
    this.userField = field;
  }

  public addServerField(serverField: ServerFieldType) {
    dedupeFieldTypes(this.fieldTypes, this.fieldTypesMap, serverField);
  }

  public setRoleFieldType(roleFieldType: RoleFieldType) {
    if (this.roleFieldType) {
      if (this.roleFieldType.field !== roleFieldType.field) {
        throw new Error("Role field already defined for " + this.roleFieldType.field);
      }
      for (const attr in roleFieldType) {
        if (Object.prototype.hasOwnProperty.call(roleFieldType, attr)) {
          this.roleFieldType[attr] = roleFieldType[attr];
        }
      }
    } else {
      this.roleFieldType = roleFieldType;
    }
  }

  public static Model(args: ServerModelArgs = {}) {
    return (constructor: typeof BaseType) => {
      if (!constructor.serverMetadata) {
        constructor.serverMetadata = new ServerModelMetadata(constructor.serverMetadata);
      }

      constructor.serverMetadata.setArgs(args);
    };
  }
}
