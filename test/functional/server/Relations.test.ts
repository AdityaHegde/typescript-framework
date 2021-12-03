import got from "got";
import {ChildOneModel} from "./models/relation/ChildOneModel";
import {ParentModel} from "./models/relation/ParentModel";
import {ChildOneOneModel} from "./models/relation/ChildOneOneModel";
import {ChildTwoModel} from "./models/relation/ChildTwoModel";
import {parseGotResponse} from "../../data/mongoose";
import {DataProviderData} from "@adityahegde/typescript-test-utils";
import {ServerTestBase} from "../../test-bases/ServerTestBase";
import {getServerTestSuiteParametersForJWT} from "../../test-bases/getServerTestSuiteParameter";
import {assertObject} from "../../assertObject";

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

@ServerTestBase.ParameterizedSuite(getServerTestSuiteParametersForJWT("RelationsTest"))
export class RelationsTest extends ServerTestBase {
  private ParentModelPath: string;

  private childOneModelIdMap = new Map<string, string>();
  private childTwoModelIdMap = new Map<string, string>();

  @ServerTestBase.BeforeSuite()
  public async setupRelationsTest() {
    this.ParentModelPath = `${this.testSuiteParameter.ServerBaseUrl}${this.routeFactory.getRoute(ParentModel.metadata.modelName).apiPath}`;

    const childOnePath = `${this.testSuiteParameter.ServerBaseUrl}${this.routeFactory.getRoute(ChildOneModel.metadata.modelName).apiPath}`;
    await Promise.all(InitialChildOneModels.map(async (InitialChildOneModel) => {
      const record = await parseGotResponse(got.post(childOnePath, {json: {data: InitialChildOneModel}}));
      this.childOneModelIdMap.set(record.attributes.label, record.id);
    }));

    const childTwoPath = `${this.testSuiteParameter.ServerBaseUrl}${this.routeFactory.getRoute(ChildTwoModel.metadata.modelName).apiPath}`;
    await Promise.all(InitialChildTowModels.map(async (InitialChildTowModel) => {
      const record = await parseGotResponse(got.post(childTwoPath, {json: {data: InitialChildTowModel}}));
      this.childTwoModelIdMap.set(record.attributes.label, record.id);
    }));
  }

  public saveChildModelsData(): DataProviderData {
    return {
      subData: [{
        title: "Basic Data 1",
        args: [
          InitialData[0],
          { label: "Parent_0", childOneModel: "ChildOne_0", childTwoModels: ["ChildTwo_0", "ChildTwo_1", "ChildTwo_2"]},
          ["ChildOneOne_0", "ChildOneOne_1", "ChildOneOne_2"],
        ],
      }, {
        title: "Basic Data 2",
        args: [
          InitialData[1],
          { label: "Parent_1", childOneModel: "ChildOne_1", childTwoModels: ["ChildTwo_3", "ChildTwo_4"]},
          ["ChildOneOne_3", "ChildOneOne_4"],
        ],
      }, {
        title: "Partial Sparse Data",
        args: [
          InitialData[2],
          { label: "Parent_2", childOneModel: "ChildOne_3", childTwoModels: []},
          [],
        ],
      }, {
        title: "Sparse Data",
        args: [
          InitialData[3],
          { label: "Parent_3", childOneModel: undefined, childTwoModels: []},
          [],
        ],
      }],
    }
  }

  @ServerTestBase.Test("saveChildModelsData")
  public async shouldSaveAllChildModels(parentModelData, expectedParentModelResponse, expectedChildOneOneModels) {
    await this.saveAndAssert(parentModelData, expectedParentModelResponse, expectedChildOneOneModels);
  }

  @ServerTestBase.Test("saveChildModelsData")
  public async shouldSaveWithChildModelIds(parentModelData, expectedParentModelResponse, expectedChildOneOneModels) {
    if (parentModelData.relations?.childOneModel) {
      parentModelData.relations.childOneModelId =
        this.childOneModelIdMap.get(parentModelData.relations.childOneModel.attributes.label);
      delete parentModelData.relations.childOneModel;
    }
    if (parentModelData.relations?.childTwoModels) {
      parentModelData.relations.childTwoModelIds =
        parentModelData.relations.childTwoModels.map(model => this.childTwoModelIdMap.get(model.attributes.label));
      delete parentModelData.relations.childTwoModels;
    }
    await this.saveAndAssert(parentModelData, expectedParentModelResponse, expectedChildOneOneModels);
  }

  private async saveAndAssert(parentModelData, expectedParentModelResponse, expectedChildOneOneModels) {
    const record = await parseGotResponse(got.post(this.ParentModelPath, {json: {data: parentModelData}}));
    let childOneModel;
    let childOneOneModels;
    let childTwoModels;
    if (record.links?.childOneModel) {
      childOneModel = await parseGotResponse(got.get(`${this.testSuiteParameter.ServerBaseUrl}${record.links.childOneModel}`, {retry: 0}));
      if (childOneModel.links?.childOneOneModels) {
        childOneOneModels = await parseGotResponse(
          got.get(`${this.testSuiteParameter.ServerBaseUrl}${childOneModel.links.childOneOneModels}`, {retry: 0}));
      }
    }
    if (record.links?.childTwoModels) {
      childTwoModels = await parseGotResponse(got.get(`${this.testSuiteParameter.ServerBaseUrl}${record.links.childTwoModels}`, {retry: 0}));
    }

    assertObject({
      label: record.attributes.label,
      childOneModel: childOneModel?.attributes.label,
      childTwoModels: childTwoModels?.map?.(childTwoModel => childTwoModel.attributes.label) ?? [],
    }, expectedParentModelResponse);
    assertObject(childOneOneModels?.map?.(childOneOneModel => childOneOneModel.attributes.label) ?? [], expectedChildOneOneModels);
  }
}
