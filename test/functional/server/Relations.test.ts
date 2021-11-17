import got from "got";
import should from "should";
import {ChildOneModel} from "../../test-classes/server/relation/ChildOneModel";
import {JwtMongooseTestBase} from "../../test-bases/JwtMongooseTestBase";
import {ParentModel} from "../../test-classes/server/relation/ParentModel";
import {ChildOneOneModel} from "../../test-classes/server/relation/ChildOneOneModel";
import {ChildTwoModel} from "../../test-classes/server/relation/ChildTwoModel";
import {parseGotResponse} from "../../data/mongoose";
import {DataProviderData} from "@adityahegde/typescript-test-utils";

const RelationsModels = [
  ParentModel, ChildOneModel, ChildOneOneModel, ChildTwoModel,
];

function getModelData(type: string, relationField?: string, relationData?: any) {
  return [0, 1, 2, 3, 4].map(num => {
    return {
      type, attributes: {label: `${type}_${num}`},
      ...(relationField && relationData[num] ? {relations: {[relationField]: relationData[num]}}: {}),
    };
  });
}

const InitialChildOneOneModels = getModelData("ChildOneOne");
const InitialChildOneModels = getModelData("ChildOne", "childOneOneModels", [
  [InitialChildOneOneModels[0], InitialChildOneOneModels[1], InitialChildOneOneModels[2]],
  [InitialChildOneOneModels[3], InitialChildOneOneModels[4]],
]);
const InitialChildTowModels = getModelData("ChildTwo");
const InitialData = [{
  type: "parent", attributes: {label: "Parent_0"}, relations: {
    childOneModel: InitialChildOneModels[0],
    childTwoModels: [InitialChildTowModels[0], InitialChildTowModels[1], InitialChildTowModels[2]],
  },
}, {
  type: "parent", attributes: {label: "Parent_1"}, relations: {
    childOneModel: InitialChildOneModels[1],
    childTwoModels: [InitialChildTowModels[3], InitialChildTowModels[4]],
  },
}, {
  type: "parent", attributes: {label: "Parent_2"}, relations: {
    childOneModel: InitialChildOneModels[3],
  },
}, {
  type: "parent", attributes: {label: "Parent_3"},
}];

@JwtMongooseTestBase.Suite
export class RelationsTest extends JwtMongooseTestBase {
  protected ParentModelPath: string;

  @JwtMongooseTestBase.BeforeSuite()
  public setupRelationsTest() {
    this.ParentModelPath = `${this.ServerBaseUrl}${this.routeFactory.getRoute(ParentModel.metadata.modelName).apiPath}`;
  }

  @JwtMongooseTestBase.BeforeEachTest()
  public async setupRelationsTestEachTest() {
    await Promise.all(RelationsModels.map(async (model) => {
      await this.dataStore.dataStoreModelFactory.getDataStoreModel(model.metadata.modelName).deleteMany({});
    }));
  }

  public saveChildModelsData(): DataProviderData {
    return {
      subData: [{
        title: "Basic Data 1",
        args: [
          InitialData[0],
          { label: "Parent_0", childOneModelId: "ChildOne_0", childTwoModelIds: ["ChildTwo_2", "ChildTwo_0", "ChildTwo_1"]},
          ["ChildOneOne_0", "ChildOneOne_1", "ChildOneOne_2"],
        ],
      }, {
        title: "Basic Data 2",
        args: [
          InitialData[1],
          { label: "Parent_1", childOneModelId: "ChildOne_1", childTwoModelIds: ["ChildTwo_3", "ChildTwo_4"]},
          ["ChildOneOne_3", "ChildOneOne_4"],
        ],
      }, {
        title: "Partial Sparse Data",
        args: [
          InitialData[2],
          { label: "Parent_2", childOneModelId: "ChildOne_3", childTwoModelIds: []},
          [],
        ],
      }, {
        title: "Sparse Data",
        args: [
          InitialData[3],
          { label: "Parent_3", childOneModelId: undefined, childTwoModelIds: []},
          [],
        ],
      }]
    }
  }

  @JwtMongooseTestBase.Test("saveChildModelsData")
  public async shouldSaveAllChildModels(parentModelData, expectedParentModelResponse, expectedChildOneOneModels) {
    const record = await parseGotResponse(got.post(this.ParentModelPath, {json: {data: parentModelData}}));
    let childOneModel;
    let childOneOneModels;
    let childTwoModels;
    if (record.links?.childOneModel) {
      childOneModel = await parseGotResponse(got.get(`${this.ServerBaseUrl}${record.links.childOneModel}`, {retry: 0}));
      if (childOneModel.links?.childOneOneModels) {
        childOneOneModels = await parseGotResponse(
          got.get(`${this.ServerBaseUrl}${childOneModel.links.childOneOneModels}`, {retry: 0}));
      }
    }
    if (record.links?.childTwoModels) {
      childTwoModels = await parseGotResponse(got.get(`${this.ServerBaseUrl}${record.links.childTwoModels}`, {retry: 0}));
    }

    should({
      label: record.attributes.label,
      childOneModelId: childOneModel?.attributes.label,
      childTwoModelIds: childTwoModels?.map?.(childTwoModel => childTwoModel.attributes.label) ?? [],
    }).containDeep(expectedParentModelResponse);
    should(childOneOneModels?.map?.(childOneOneModel => childOneOneModel.attributes.label) ?? []).be.containDeep(expectedChildOneOneModels);
  }
}
