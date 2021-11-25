import {
  AuthType,
  getServerTestSuiteParameter,
  ServerTestSuiteParameter
} from "../../test-bases/getServerTestSuiteParameter";
import {getPortByTestSuite} from "../../test-bases/getPortByTestSuite";
import {ProductUser} from "./app/models/ProductUser";
import {bootstrapE2EData} from "../../data/e2e";

export function getE2EParameter(titleSuffix = "", user: any): Array<ServerTestSuiteParameter> {
  return [{
    ...getServerTestSuiteParameter(titleSuffix, getPortByTestSuite(titleSuffix), __dirname + "/public", AuthType.JWT, ProductUser),
    loginUser: user,
    bootstrapData: bootstrapE2EData,
  }];
}
