import {createServerMetadata} from "./createServerMetadata";

export function UserField() {
  return (target: any, propertyKey: string) => {
    const constructor = createServerMetadata(target);
    constructor.serverMetadata.addUserField(propertyKey);
  };
}
