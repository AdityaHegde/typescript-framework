import React from "react";
import expect from "expect";
import renderer from "react-test-renderer";
import {SimpleModel} from "../../../test-classes/ui/SimpleModel";
import {AntdJestTestBase} from "../../../test-bases/AntdJestTestBase";
import {NestedModel} from "../../../test-classes/ui/NestedModel";
import {ExhaustivePropsModel} from "../../../test-classes/ui/ExhaustivePropsModel";
import {ModelForm} from "../../../../src/ui/form";
import { BaseType } from "../../../../src/models/BaseType";

@AntdJestTestBase.Suite
export class ModelFormItemsTest extends AntdJestTestBase {
  public modelFormData() {
    return {
      subData: [{
        title: "Simple models",
        args: [new SimpleModel("x"), SimpleModel],
      }, {
        title: "ExhaustivePropsModel models",
        args: [new ExhaustivePropsModel("x"), ExhaustivePropsModel],
      }, {
        title: "NestedModel models",
        args: [new NestedModel("x"), NestedModel],
      }],
    };
  }

  @AntdJestTestBase.Test("modelFormData")
  public modelFormTest(record: BaseType, model: typeof BaseType) {
    const tree = renderer.create(<ModelForm record={record} model={model} formRef={null} onFinish={() => {}} />);
    expect(tree).toMatchSnapshot();
  }
}
