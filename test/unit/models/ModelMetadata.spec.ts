import should from "should";
import {ModelMetadata, ServerModelMetadata, ValidationMetadata} from "../../../src/models";
import {MochaTestBase} from "@adityahegde/typescript-test-utils/dist/mocha";
import {TestMetadataBase} from "../../test-classes/models/TestMetadataBase";
import {Field3Enum} from "../../test-classes/models/Field3Enum";
import {IndividualFieldTest} from "../../test-classes/models/IndividualFieldTest";

@MochaTestBase.Suite
export class ModelMetadataSpec extends MochaTestBase {
  @MochaTestBase.Test()
  public verifyBasicMetadataPopulated() {
    should(TestMetadataBase.metadata.modelName).be.eql("TestMetadataBase");
    should(TestMetadataBase.metadata.singular).be.eql("testMetadataBase");
    should(TestMetadataBase.metadata.plural).be.eql("testMetadataBases");
    should(TestMetadataBase.metadata.apiBase).be.eql("");
    should(TestMetadataBase.metadata.apiPath).be.eql("testMetadataBases");
    ModelMetadataSpec.assertMetadata(TestMetadataBase.metadata);
    ModelMetadataSpec.assertValidationMetadata(TestMetadataBase.validationMetadata);
    ModelMetadataSpec.assertServerMetadata(TestMetadataBase.serverMetadata);

    should(TestMetadataBase.serverMetadata.readRole).be.undefined();
    should(TestMetadataBase.serverMetadata.writeRole).be.undefined();
  }

  @MochaTestBase.Test()
  public verifyIndividualFieldMetadataPopulated() {
    should(IndividualFieldTest.metadata.modelName).be.eql("IndividualFieldTest");
    should(IndividualFieldTest.metadata.singular).be.eql("ind");
    should(IndividualFieldTest.metadata.plural).be.eql("indis");
    should(IndividualFieldTest.metadata.apiBase).be.eql("/ind");
    should(IndividualFieldTest.metadata.apiPath).be.eql("/ind/indis");
    ModelMetadataSpec.assertMetadata(IndividualFieldTest.metadata);
    ModelMetadataSpec.assertValidationMetadata(IndividualFieldTest.validationMetadata);
    ModelMetadataSpec.assertServerMetadata(IndividualFieldTest.serverMetadata);

    should(IndividualFieldTest.serverMetadata.readRole).be.equal("read");
    should(IndividualFieldTest.serverMetadata.writeRole).be.equal("write");
  }

  private static assertMetadata(metadata: ModelMetadata) {
    const opts = {
      "0": "F3Enum1",
      "1": "F3Enum2",
      "2": "F3Enum3",
      "3": "F3Enum4",
      "4": "F3Enum5",
      F3Enum1: 0,
      F3Enum2: 1,
      F3Enum3: 2,
      F3Enum4: 3,
      F3Enum5: 4,
    };
    should(metadata.fieldTypes).be.eql([
      { field: "field1", label: "Main Field", type: "text", displayField: true },
      { field: "field2", label: "field2", type: "number", restricted: true, },
      { field: "field3", label: "field3", type: "select", opts, displayField: true, filter: true, localFilter: false },
      { field: "field4", label: "field4", type: "select", multi: true, opts, readonly: true },
      { field: "fields5", label: "fields5", type: "array", subType: "text" },
      { field: "childFieldId", label: "childFieldId", type: "modelSelect", ref: "TestMetadataChild", modelField: "childField" },
      { field: "childFieldIds", label: "childFieldIds", type: "modelSelect", "multi": true, ref: "TestMetadataChild", modelField: "childFields" },
    ]);
    should(metadata.displayFields).be.eql(["field1", "field3"]);
    should(metadata.relations).be.eql([
      { field: "childField", fk: "childFieldId", reverseField: "parent1" },
      { field: "childFields", fk: "childFieldIds", reverseField: "parent2", multi: true },
    ]);
    should(metadata.filters).be.eql([{ field: "field3" }]);
    should(metadata.readonly).be.eql(["field4"]);
    should(metadata.restricted).be.eql([ "field2" ]);
  }

  private static assertValidationMetadata(validationMetadata: ValidationMetadata) {
    should(validationMetadata.fieldTypes).be.eql([
      { field: "field1", email: true },
      { field: "field2", required: true, minValue: 0, maxValue: 5 },
      { field: "childFieldId", regex: /.*/ },
    ]);
  }

  private static assertServerMetadata(serverMetadata: ServerModelMetadata) {
    should(serverMetadata.fieldTypes).be.eql([
      { field: "field1", unique: true },
      { field: "field3", unique: true, uniqueGroup: "unique_t", index: true },
      { field: "childFieldId", unique: true, uniqueGroup: "unique_t" },
    ]);
    should(serverMetadata.roleFieldType).be.eql({
      field: "field3", admin: Field3Enum.F3Enum1, invitee: Field3Enum.F3Enum2,
    });
  }
}
