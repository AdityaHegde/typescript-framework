import {SimpleModelFieldEnum} from "./SimpleModelFieldEnum";
import {ModelSelectField, SelectField, TextField} from "../../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../../src/models/BaseType";
import {DisplayField} from "../../../../src/models/metadata/DisplayField";
import {Builder} from "../../../../src/utils/Builder";
import {ModelMetadata} from "../../../../src/models/metadata/ModelMetadata";
import {ParentKey} from "../../../../src/models/metadata/ParentKey";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class SimpleModel extends BaseType {
  @DisplayField()
  @TextField()
  public textField = "";

  @SelectField({opts: SimpleModelFieldEnum})
  public singleSelect: SimpleModelFieldEnum = null;

  @ParentKey({ref: "NestedModel"})
  @ModelSelectField({ref: "NestedModel"})
  public nestedModelId: string;

  public static getData() {
    return [
      Builder(new SimpleModel("a")).build(),
      Builder(new SimpleModel("b")).textField("DisplayB").build(),
      Builder(new SimpleModel("c")).textField("DisplayC").singleSelect(SimpleModelFieldEnum.val2).build(),
    ];
  }
}
