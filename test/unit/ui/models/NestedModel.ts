import {SimpleModel} from "./SimpleModel";
import {
  BaseType,
  DisplayField,
  HasMany,
  HasOne, ModelMetadata, ModelMultiSelectField,
  ModelSelectField,
  ServerModelMetadata,
  TextField
} from "../../../../src/models";
import {Builder} from "../../../../src";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class NestedModel extends BaseType {
  @DisplayField()
  @TextField()
  public textField = "";

  @HasOne({reverseField: "nestedModelId"})
  @ModelSelectField({ref: "SimpleModel"})
  public simpleModel: SimpleModel;

  @HasMany()
  @ModelMultiSelectField({ref: "SimpleModel"})
  public simpleModels = new Array<SimpleModel>();

  public static getData() {
    return [
      Builder(new NestedModel("a")).build(),
      Builder(new NestedModel("b")).textField("DisplayB").build({simpleModelId: "c"}),
      Builder(new NestedModel("c")).textField("DisplayC").build({simpleModelIds: ["a", "c"]}),
    ];
  }
}
