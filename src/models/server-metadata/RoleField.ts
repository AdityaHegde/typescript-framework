import {createServerMetadata} from "./createServerMetadata";
import {BaseType} from "../BaseType";

export type RoleFieldType = {
  field?: string;
  default?: any;
  admin?: any;
  invitee?: any;
  isSet?: boolean;
}

export function RoleField<Type>(roleFieldType: RoleFieldType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createServerMetadata(target);
    constructor.serverMetadata.setRoleFieldType({
      ...roleFieldType,
      field: roleFieldType.field || propertyKey,
    });
  }
}

export function DefaultRole({field, role}: {field?: string, role: any}) {
  return RoleField({
    field,
    default: role,
  });
}

export function AdminRole({field, role}: {field?: string, role: any}) {
  return RoleField({
    field,
    admin: role,
  });
}

export function InviteeRole({field, role}: {field?: string, role: any}) {
  return RoleField({
    field,
    invitee: role,
  });
}
