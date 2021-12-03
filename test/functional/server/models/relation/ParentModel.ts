import {ChildOneModel} from "./ChildOneModel";
import {ChildTwoModel} from "./ChildTwoModel";
import {ModelMultiSelectField, ModelSelectField, TextField} from "../../../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../../src/models/BaseType";
import {HasMany, HasOne} from "../../../../../src/models/metadata/Relation";
import {ModelMetadata} from "../../../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ParentModel extends BaseType {
  @TextField()
  public label: string;

  @HasOne({reverseField: "parentModelId"})
  @ModelSelectField({ref: "ChildOneModel"})
  public childOneModel: ChildOneModel;

  @HasMany({reverseField: "parentModelId"})
  @ModelMultiSelectField({ref: "ChildTwoModel"})
  public childTwoModels: Array<ChildTwoModel>;
}
