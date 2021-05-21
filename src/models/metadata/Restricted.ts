import { createMetadata } from "./createMetadata";

export function Restricted() {
  return (target: any, propertyKey: string) => {
    const constructor = createMetadata(target);
    constructor.metadata.addRestrictedField(propertyKey);
  };
}
