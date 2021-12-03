/**
 * @jest-environment jsdom
 */

import React from "react";
import expect from "expect";
import {render} from "@testing-library/react";
import {SimpleModel} from "../models/SimpleModel";
import {AntdJestTestBase} from "../../../test-bases/AntdJestTestBase";
import {NestedModel} from "../models/NestedModel";
import {ExhaustivePropsModel} from "../models/ExhaustivePropsModel";
import {ModelForm} from "../../../../src/ui/form";
import {BaseType} from "../../../../src/models";

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
    const {asFragment} = render(<ModelForm record={record} model={model} formRef={null} onFinish={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  }
}
