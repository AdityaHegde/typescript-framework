import {createMetadata} from "./createMetadata";

export function DisplayField() {
  return (target: any, propertyKey: string) => {
    const constructor = createMetadata(target);
    constructor.metadata.addDisplayField(propertyKey);
  };
}
