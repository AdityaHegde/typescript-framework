import { ModelMetadata } from "./metadata/ModelMetadata";
import {ServerModelMetadata} from "./server-metadata/ServerModelMetadata";
import {ValidationMetadata} from "./validation-metadata/ValidationMetadata";

export class BaseType {
  public id: string;

  public type: string;

  public static metadata: ModelMetadata;
  public static serverMetadata: ServerModelMetadata;
  public static validationMetadata: ValidationMetadata;

  constructor(id: string) {
    this.type = (this.constructor as typeof BaseType).metadata.modelName;
    this.id = id;
  }
}
