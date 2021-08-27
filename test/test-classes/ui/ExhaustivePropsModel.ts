import {SimpleModelFieldEnum} from "./SimpleModelFieldEnum";
import {RemoteFilter} from "../../../src/models/metadata/Filters";
import {RangeValidation, RegexValidation, Required} from "../../../src/models/validation-metadata/Validation";
import {ArrayField, NumberField, SelectField, SwitchField, TextField} from "../../../src/models/metadata/Fields";
import {Builder} from "../../../src/utils/Builder";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {Readonly} from "../../../src/models/metadata/Readonly";
import {BaseType} from "../../../src/models/BaseType";
import {DisplayField} from "../../../src/models/metadata/DisplayField";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

@ServerModelMetadata.Model()
@ModelMetadata.Model()
export class ExhaustivePropsModel extends BaseType {
  @Required()
  @RegexValidation({regex: /^[a-zA-Z0-9]*$/})
  @DisplayField()
  @TextField()
  public textField = "";

  @RangeValidation({minValue: 0, maxValue: 5})
  @RemoteFilter()
  @NumberField({label: "Main Number Field"})
  public numberField = 0;

  @RemoteFilter()
  @SwitchField()
  public booleanField = false;

  @Readonly()
  @TextField()
  public hiddenField = "";

  @RemoteFilter()
  @SelectField({opts: SimpleModelFieldEnum})
  public singleSelect = SimpleModelFieldEnum.val1;

  // Breaks with react-test-renderer. Will revisit later
  // @RemoteFilter()
  // @MultiSelectField({opts: SimpleModelFieldEnum})
  public multiSelect = new Array<SimpleModelFieldEnum>();

  @ArrayField({subType: "text"})
  public arrayField = new Array<string>();

  public static getData() {
    return [
      Builder(new ExhaustivePropsModel("a")).build(),
      Builder(new ExhaustivePropsModel("b")).textField("DisplayB").build(),
      Builder(new ExhaustivePropsModel("c")).textField("DisplayC").numberField(3.14).build(),
      Builder(new ExhaustivePropsModel("d")).textField("DisplayD").booleanField(true).build(),
      Builder(new ExhaustivePropsModel("e")).textField("DisplayE").singleSelect(SimpleModelFieldEnum.val3).build(),
      Builder(new ExhaustivePropsModel("f")).textField("DisplayF")
        .multiSelect([SimpleModelFieldEnum.val2, SimpleModelFieldEnum.val1]).build(),
      Builder(new ExhaustivePropsModel("g")).textField("DisplayG").numberField(3.14)
        .booleanField(true).singleSelect(SimpleModelFieldEnum.val1)
        .multiSelect([SimpleModelFieldEnum.val3, SimpleModelFieldEnum.val1])
        .build(),
    ];
  }
}
