import should from "should";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";
import {getQueryString} from "../../../src/ui";
import {UnitTestBase} from "../UnitTestBase";

@TestBase.Suite
export class GetQueryStringTest extends UnitTestBase {
  public queryBuilderData(): DataProviderData<[NodeJS.Dict<any>, any, string]> {
    return {
      subData: [{
        title: "Exhaustive types query string",
        args: [
          {
            qpArr: [1, "a", ["b", 2], {qpArrObj1: 3, qpArrObj2: "c"}],
            qpObj: {qpObjArr: [1, 2], qpObjVal1: 3, qpObjVal2: "a"},
            qpVal1: 1, qpVal2: "a",
          },
          undefined,
          "qpArr[0]=1&qpArr[1]=a&qpArr[2][0]=b&qpArr[2][1]=2&qpArr[3].qpArrObj1=3&" +
          "qpArr[3].qpArrObj2=c&qpObj.qpObjArr[0]=1&qpObj.qpObjArr[1]=2&qpObj.qpObjVal1=3&qpObj.qpObjVal2=a&qpVal1=1&qpVal2=a",
        ],
      }, {
        title: "Query with a filter",
        args: [
          {
            qpArr: [1, "a", ["b", 2], {qpArrObj1: 3, qpArrObj2: "c"}],
            qpObj: {qpObjArr: [1, 2], qpObjVal1: 3, qpObjVal2: "a"},
            qpVal1: 1, qpVal2: "a",
          },
          (key, value, level) => level >= 1 && !!key.match(/arr/i),
          "qpArr[0]=1&qpArr[1]=a&qpArr[2][0]=b&qpArr[2][1]=2&qpArr[3].qpArrObj1=3&qpArr[3].qpArrObj2=c",
        ],
      }]
    };
  }

  @TestBase.Test("queryBuilderData")
  public shouldBuildQuery(query: NodeJS.Dict<any>, filter: any, expectedQueryString: string) {
    should(getQueryString(query, filter)).be.equal(expectedQueryString);
  }
}
