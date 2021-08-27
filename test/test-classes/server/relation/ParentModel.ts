import {ChildOneModel} from "./ChildOneModel";
import {ChildTwoModel} from "./ChildTwoModel";
import {ModelMultiSelectField, ModelSelectField, TextField} from "../../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../src/models/BaseType";
import {HasMany, HasOne} from "../../../../src/models/metadata/Relation";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ParentModel extends BaseType {
  @TextField()
  public label: string;

  @ModelSelectField({ref: "ChildOneModel"})
  public childOneModelId: string;
  @HasOne({fk: "childOneModelId", reverseField: "parentModelId"})
  public childOneModel: ChildOneModel;

  @ModelMultiSelectField({ref: "ChildTwoModel"})
  public childTwoModelIds: Array<string>;
  @HasMany({fk: "childTwoModelIds", reverseField: "parentModelId"})
  public childTwoModels: Array<ChildTwoModel>;
}
