import { createMetadata } from "./createMetadata";

export function Readonly() {
  return (target: any, propertyKey: string) => {
    const constructor = createMetadata(target);
    constructor.metadata.addReadonlyField(propertyKey);
  };
}
