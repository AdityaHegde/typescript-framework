import {ModelSelectField, TextField} from "../../../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../../src/models/BaseType";
import {ModelMetadata} from "../../../../../src/models/metadata/ModelMetadata";
import {ParentKey} from "../../../../../src/models/metadata/ParentKey";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ChildOneOneModel extends BaseType {
  @TextField()
  public label: string;

  @ParentKey({ref: "ChildOneModel"})
  @ModelSelectField({ref: "ChildOneModel"})
  public childOneModelId: string;
}
