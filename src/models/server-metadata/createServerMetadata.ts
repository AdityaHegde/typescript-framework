import {BaseType} from "../BaseType";
import {ServerModelMetadata} from "./ServerModelMetadata";

/**
 * @internal
 * @param target
 */
export function createServerMetadata(target: any): typeof BaseType {
  const constructor: typeof BaseType = target.constructor;

  if (!Object.prototype.hasOwnProperty.call(constructor, "serverMetadata")) {
    constructor.serverMetadata = new ServerModelMetadata(constructor.serverMetadata);
  }

  return constructor;
}
