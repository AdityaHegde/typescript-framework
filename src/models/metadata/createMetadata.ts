import { BaseType } from "../BaseType";
import { ModelMetadata } from "./ModelMetadata";

/**
 * @internal
 * @param target
 */
export function createMetadata(target: any): typeof BaseType {
  const constructor: typeof BaseType = target.constructor;

  if (!Object.prototype.hasOwnProperty.call(constructor, "metadata")) {
    constructor.metadata = new ModelMetadata(constructor.metadata);
  }

  return constructor;
}
