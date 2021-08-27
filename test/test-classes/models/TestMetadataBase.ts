import {TestMetadataChild} from "./TestMetadataChild";
import {Field3Enum} from "./Field3Enum";
import {Validation} from "../../../src/models/validation-metadata/Validation";
import {RoleField} from "../../../src/models/server-metadata/RoleField";
import {Field} from "../../../src/models/metadata/Fields";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {Relation} from "../../../src/models/metadata/Relation";
import {Readonly} from "../../../src/models/metadata/Readonly";
import {BaseType} from "../../../src/models/BaseType";
import {DisplayField} from "../../../src/models/metadata/DisplayField";
import {Restricted} from "../../../src/models/metadata/Restricted";
import {Filter} from "../../../src/models/metadata/Filters";
import {ServerField} from "../../../src/models/server-metadata/ServerField";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

@ModelMetadata.Model()
@ServerModelMetadata.Model()
export class TestMetadataBase extends BaseType {
  @ServerField({unique: true})
  @Validation({email: true})
  @DisplayField()
  @Field({type: "text", label: "Main Field"})
  public field1 = "";

  @Validation({minValue: 0, maxValue: 5, required: true})
  @Restricted()
  @Field({type: "number"})
  public field2 = 0;

  @RoleField({admin: Field3Enum.F3Enum1, invitee: Field3Enum.F3Enum2})
  @ServerField({unique: true, uniqueGroup: "unique_t", index: true})
  @DisplayField()
  @Filter()
  @Field({type: "select", opts: Field3Enum})
  public field3 = Field3Enum.F3Enum1;

  @Readonly()
  @Field({type: "select", multi: true, opts: Field3Enum})
  public field4 = [Field3Enum.F3Enum1];

  @Field({type: "array", subType: "text"})
  public fields5 = new Array<string>();

  @ServerField({unique: true, uniqueGroup: "unique_t"})
  @Validation({regex: /.*/})
  @Field({type: "modelSelect", ref: "TestMetadataChild"})
  public childFieldId: string;
  @Relation({fk: "childFieldId", reverseField: "parent1"})
  public childField: TestMetadataChild;

  @Field({type: "modelSelect", multi: true, ref: "TestMetadataChild"})
  public childFieldIds = new Array<string>();
  @Relation({fk: "childFieldIds", reverseField: "parent2", multi: true})
  public childFields = new Array<TestMetadataChild>();
}
