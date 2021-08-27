import React from "react";
import expect from "expect";
import renderer from "react-test-renderer";
import {SimpleModel} from "../../../test-classes/ui/SimpleModel";
import {ModelList} from "../../../../src/ui/list";
import {AntdJestTestBase} from "../../../test-bases/AntdJestTestBase";
import {NestedModel} from "../../../test-classes/ui/NestedModel";
import {ExhaustivePropsModel} from "../../../test-classes/ui/ExhaustivePropsModel";
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
    const tree = renderer.create(<ModelList records={records} model={model} onEdit={() => {}} onDelete={() => {}} />);
    expect(tree).toMatchSnapshot();
  }
}
