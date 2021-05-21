import { BaseType } from "../BaseType";
import {ValidationMetadata} from "./ValidationMetadata";

/**
 * @internal
 * @param target
 */
export function createValidationMetadata(target: any): typeof BaseType {
  const constructor: typeof BaseType = target.constructor;

  if (!Object.prototype.hasOwnProperty.call(constructor, "validationMetadata")) {
    constructor.validationMetadata = new ValidationMetadata(constructor.validationMetadata);
  }

  return constructor;
}
