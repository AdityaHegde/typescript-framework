import { createMetadata } from "./createMetadata";

export type ParentKeyType = {
  field?: string,
  ref: string,
}

export function ParentKey(parentKeyOptions: ParentKeyType) {
  return (target: any, propertyKey: string) => {
    const constructor = createMetadata(target);
    const field = parentKeyOptions.field || propertyKey;
    constructor.metadata.parentKeys.push({
      ...parentKeyOptions,
      field,
    });
  };
}
