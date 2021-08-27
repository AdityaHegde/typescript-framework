import {TestMetadataChild} from "./TestMetadataChild";
import {Field3Enum} from "./Field3Enum";
import {
  EmailValidation,
  RangeValidation,
  RegexValidation,
  Required
} from "../../../src/models/validation-metadata/Validation";
import {Restricted} from "../../../src/models/metadata/Restricted";
import {HasMany, HasOne} from "../../../src/models/metadata/Relation";
import {
  ArrayField,
  ModelMultiSelectField, ModelSelectField,
  MultiSelectField, NumberField,
  SelectField,
  TextField
} from "../../../src/models/metadata/Fields";
import {Readonly} from "../../../src/models/metadata/Readonly";
import {DisplayField} from "../../../src/models/metadata/DisplayField";
import {IndexField, UniqueField, UniqueFieldGroup} from "../../../src/models/server-metadata/ServerField";
import {RemoteFilter} from "../../../src/models/metadata/Filters";
import {ServerModelMetadata} from "../../../src/models/server-metadata/ServerModelMetadata";
import {BaseType} from "../../../src/models/BaseType";
import {AdminRole, InviteeRole} from "../../../src/models/server-metadata/RoleField";
import {ModelMetadata} from "../../../src/models/metadata/ModelMetadata";

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

  @UniqueFieldGroup({uniqueGroup: "unique_t"})
  @RegexValidation({regex: /.*/})
  @ModelSelectField({ref: "TestMetadataChild"})
  public childFieldId: string;
  @HasOne({fk: "childFieldId", reverseField: "parent1"})
  public childField: TestMetadataChild;

  @ModelMultiSelectField({ref: "TestMetadataChild"})
  public childFieldIds: Array<string> = [];
  @HasMany({fk: "childFieldIds", reverseField: "parent2"})
  public childFields = new Array<TestMetadataChild>();
}
