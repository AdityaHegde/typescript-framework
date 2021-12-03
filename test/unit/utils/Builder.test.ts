import should from "should";
import {Builder} from "../../../src";
import {TestMetadataBase} from "../models/TestMetadataBase";
import {TestMetadataChild} from "../models/TestMetadataChild";
import {Field3Enum} from "../models/Field3Enum";
import {TestBase} from "@adityahegde/typescript-test-utils";
import {UnitTestBase} from "../UnitTestBase";

@TestBase.Suite
export class BuilderTest extends UnitTestBase {
  @TestBase.Test()
  public shouldBuildAnInstance() {
    const inst = Builder(new TestMetadataBase("abc"))
      .field1("xyz").fields5(["a", "b", "c"])
      .childFields([
        Builder(new TestMetadataChild("1")).cf1(true).build(),
        Builder(new TestMetadataChild("2")).cfpk("2").build(),
        Builder(new TestMetadataChild("3")).build(),
      ])
      .build();

    should(inst.field1).be.eql("xyz");
    should(inst.field2).be.eql(0);
    should(inst.field3).be.eql(Field3Enum.F3Enum1);
    should(inst.field4).be.eql([Field3Enum.F3Enum1]);
    should(inst.fields5).be.eql(["a", "b", "c"]);
    // should(inst.childFieldId).be.undefined();
    // should(inst.childFieldIds).be.eql([]);

    const childFields = inst.childFields;
    [
      ["1", true, ""],
      ["2", false, "2"],
      ["3", false, ""],
    ].forEach((fields, index) => {
      should(childFields[index].id).be.eql(fields[0]);
      should(childFields[index].cf1).be.eql(fields[1]);
      should(childFields[index].cfpk).be.eql(fields[2]);
    });
  }
}
