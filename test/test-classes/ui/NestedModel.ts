import {SimpleModel} from "./SimpleModel";
import {ModelSelectField, TextField} from "../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../src/models/BaseType";
import {DisplayField} from "../../../src/models/metadata/DisplayField";
import {HasOne} from "../../../src/models/metadata/Relation";
import {Builder} from "../../../src/utils/Builder";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class NestedModel extends BaseType {
  @DisplayField()
  @TextField()
  public textField = "";

  @ModelSelectField({ref: "SimpleModel"})
  public simpleModelId: string = null;
  @HasOne({fk: "simpleModelId", reverseField: "nestedModelId"})
  public simpleModel: SimpleModel;

  // Breaks with react-test-renderer. Will revisit later
  // @ModelMultiSelectField({ref: "SimpleModel"})
  public simpleModelIds = new Array<string>();
  // @HasMany({fk: "simpleModelIds"})
  public simpleModels = new Array<SimpleModel>();

  public static getData() {
    return [
      Builder(new NestedModel("a")).build(),
      Builder(new NestedModel("b")).textField("DisplayB").simpleModelId("c").build(),
      Builder(new NestedModel("c")).textField("DisplayC").simpleModelIds(["a", "c"]).build(),
    ];
  }
}
