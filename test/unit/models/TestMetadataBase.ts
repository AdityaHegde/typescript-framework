import {TestMetadataChild} from "./TestMetadataChild";
import {Field3Enum} from "./Field3Enum";
import {
  BaseType,
  DisplayField,
  Field, Filter, ModelMetadata,
  Readonly,
  Relation, Restricted,
  RoleField, ServerField,
  ServerModelMetadata,
  Validation
} from "../../../src/models";

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

  @Validation({regex: /.*/})
  @Field({type: "text"})
  public regexField: string;

  @ServerField({unique: true, uniqueGroup: "unique_t"})
  @Relation({reverseField: "parent1"})
  @Field({type: "modelSelect", ref: "TestMetadataChild"})
  public childField: TestMetadataChild;

  @Relation({reverseField: "parent2", multi: true})
  @Field({type: "modelSelect", multi: true, ref: "TestMetadataChild"})
  public childFields = new Array<TestMetadataChild>();

  @Relation({fk: "otherChildFieldsAlt", multi: true})
  @Field({type: "modelSelect", multi: true, ref: "TestMetadataChild"})
  public otherChildFields: Array<TestMetadataChild>;
}
