import {TestMetadataChild} from "./TestMetadataChild";
import {Field3Enum} from "./Field3Enum";
import {
  AdminRole,
  ArrayField, BaseType,
  DisplayField, EmailValidation,
  HasMany, HasOne, IndexField, InviteeRole, ModelMetadata,
  ModelMultiSelectField, ModelSelectField, MultiSelectField, NumberField, RangeValidation,
  Readonly,
  RegexValidation, RemoteFilter,
  Required,
  Restricted, SelectField, ServerModelMetadata, TextField, UniqueField, UniqueFieldGroup
} from "../../../src/models";

@ModelMetadata.Model({
  apiBase: "/ind",
  singular: "ind",
  plural: "indis",
})
@ServerModelMetadata.Model({
  writeRole: "write",
  readRole: "read",
})
export class IndividualFieldTest extends BaseType {
  @UniqueField()
  @EmailValidation()
  @DisplayField()
  @TextField({label: "Main Field"})
  public field1 = "";

  @Required()
  @RangeValidation({minValue: 0, maxValue: 5})
  @Restricted()
  @NumberField()
  public field2 = 0;

  @AdminRole({role: Field3Enum.F3Enum1})
  @InviteeRole({role: Field3Enum.F3Enum2})
  @UniqueFieldGroup({uniqueGroup: "unique_t"})
  @IndexField()
  @DisplayField()
  @RemoteFilter()
  @SelectField({opts: Field3Enum})
  public field3 = Field3Enum.F3Enum1;

  @Readonly()
  @MultiSelectField({opts: Field3Enum})
  public field4 = [Field3Enum.F3Enum1];

  @ArrayField({subType: "text"})
  public fields5: Array<string> = [];

  @RegexValidation({regex: /.*/})
  @TextField()
  public regexField: string;

  @UniqueFieldGroup({uniqueGroup: "unique_t"})
  @HasOne({reverseField: "parent1"})
  @ModelSelectField({ref: "TestMetadataChild"})
  public childField: TestMetadataChild;

  @HasMany({reverseField: "parent2"})
  @ModelMultiSelectField({ref: "TestMetadataChild"})
  public childFields = new Array<TestMetadataChild>();

  @HasMany({fk: "otherChildFieldsAlt"})
  @ModelMultiSelectField({ref: "TestMetadataChild"})
  public otherChildFields: Array<TestMetadataChild>;
}
