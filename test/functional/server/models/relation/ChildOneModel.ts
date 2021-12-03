import {ChildOneOneModel} from "./ChildOneOneModel";
import {ModelMultiSelectField, ModelSelectField, TextField} from "../../../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../../src/models/BaseType";
import {HasMany} from "../../../../../src/models/metadata/Relation";
import {ModelMetadata} from "../../../../../src/models/metadata/ModelMetadata";
import {ParentKey} from "../../../../../src/models/metadata/ParentKey";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ChildOneModel extends BaseType {
  @TextField()
  public label: string;

  @ParentKey({ref: "ParentModel"})
  @ModelSelectField({ref: "ParentModel"})
  public parentModelId: string;

  @HasMany({reverseField: "childOneModelId"})
  @ModelMultiSelectField({ref: "ChildOneOneModel"})
  public childOneOneModels: Array<ChildOneOneModel>;
}
