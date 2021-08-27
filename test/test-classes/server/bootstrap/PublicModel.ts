import {ServerModelMetadata} from "../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../src/models/BaseType";
import {DisplayField} from "../../../../src/models/metadata/DisplayField";
import {TextField} from "../../../../src/models/metadata/Fields";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class PublicModel extends BaseType {
  @DisplayField()
  @TextField()
  public label: string;
}
