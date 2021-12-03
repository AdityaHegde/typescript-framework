/**
 * @jest-environment jsdom
 */

import React from "react";
import expect from "expect";
import {render} from "@testing-library/react";
import {SimpleModel} from "../models/SimpleModel";
import {ModelList} from "../../../../src/ui/list";
import {AntdJestTestBase} from "../../../test-bases/AntdJestTestBase";
import {NestedModel} from "../models/NestedModel";
import {ExhaustivePropsModel} from "../models/ExhaustivePropsModel";
import { BaseType } from "../../../../src/models/BaseType";

@AntdJestTestBase.Suite
export class ModelListTest extends AntdJestTestBase {
  public modelListData() {
    return {
      subData: [{
        title: "No data",
        args: [[], SimpleModel],
      }, {
        title: "Simple models",
        args: [SimpleModel.getData(), SimpleModel],
      }, {
        title: "ExhaustivePropsModel models",
        args: [ExhaustivePropsModel.getData(), ExhaustivePropsModel],
      }, {
        title: "NestedModel models",
        args: [NestedModel.getData(), NestedModel],
      }],
    };
  }

  @AntdJestTestBase.Test("modelListData")
  public modelListTest(records: Array<BaseType>, model: typeof BaseType) {
    const {asFragment} = render(<ModelList records={records} model={model} onEdit={() => {}} onDelete={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  }
}
