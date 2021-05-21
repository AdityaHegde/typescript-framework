import { createMetadata } from "./createMetadata";

export type FilterType = {
  local?: boolean;
  field?: string;
};

export function Filter(filterOptions: FilterType = {}) {
  return (target: any, propertyKey: string) => {
    const constructor = createMetadata(target);
    const field = filterOptions.field || propertyKey;
    constructor.metadata.addFilterField({
      field,
      ...filterOptions,
    });
  };
}

export function LocalFilter(opts: {field?: string} = {}) {
  return Filter({
    local: true,
    ...opts,
  });
}

export function RemoteFilter(opts: {field?: string} = {}) {
  return Filter(opts);
}
