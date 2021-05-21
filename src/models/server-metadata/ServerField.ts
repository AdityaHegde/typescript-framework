import {BaseType} from "../BaseType";
import {createServerMetadata} from "./createServerMetadata";

export type ServerFieldType = {
  field?: string;
  unique?: boolean;
  uniqueGroup?: string;
  index?: boolean;
}

export function ServerField<Type>(fieldType: ServerFieldType) {
  return function<T extends BaseType & Record<K, Type>, K extends string>(target: T, propertyKey: K) {
    const constructor = createServerMetadata(target);
    constructor.serverMetadata.addServerField({
      field: fieldType.field || propertyKey,
      ...fieldType,
    });
  }
}

export function UniqueField<Type>(opts: {field?: string} = {}) {
  return ServerField<Type>({
    unique: true,
    ...opts,
  });
}

export function UniqueFieldGroup<Type>(opts: {field?: string, uniqueGroup: string}) {
  return ServerField<Type>({
    unique: true,
    ...opts,
  });
}

export function IndexField<Type>(opts: {field?: string} = {}) {
  return ServerField<Type>({
    index: true,
    ...opts,
  });
}
