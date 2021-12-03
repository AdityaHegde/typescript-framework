import {MongooseStoreModel, MongooseStoreModelFactory} from "../../src/server/datastore/mongoose";
import {BootstrapModels, UserModels} from "../functional/server/models/Models";
import {ServerTestSuiteParameter} from "../test-bases/getServerTestSuiteParameter";

export async function bootstrapMongooseData(serverTestSuiteParameter: ServerTestSuiteParameter) {
  const modelFactory = serverTestSuiteParameter.server.dataStore.dataStoreModelFactory as MongooseStoreModelFactory;

  await Promise.all(BootstrapModels.map(async (model) => {
    const modelStore = modelFactory.getDataStoreModel(model.metadata.modelName) as MongooseStoreModel;
    await modelStore.mongooseModel.deleteMany({}).exec();
    for (let i = 0; i < 3; i++) {
      await modelStore.mongooseModel.create({
        label: `${model.metadata.modelName}_${i}`,
      });
    }
  }));
  await Promise.all(UserModels.map(async (userModel) => {
    const userMongooseModel = modelFactory.getDataStoreModel(userModel.metadata.modelName) as MongooseStoreModel;
    await userMongooseModel.mongooseModel.deleteMany({});
  }));
}

function sanitizeSingle(single: any, sanitisedIdCallback: (id: string) => void) {
  if (!single) {
    return single;
  }

  sanitisedIdCallback(single.id);
  single.id = "<ID>";
  return single;
}

export async function parseGotResponse(gotResp: any) {
  const resp = gotResp.then ? (await gotResp).body : gotResp.body;
  return ((typeof resp === "string") ? JSON.parse(resp) : resp).data;
}

export async function sanitize(
  gotResp: any, sanitisedIdCallback = (id: string) => {},
) {
  const json = await parseGotResponse(gotResp);
  return json?.map?.(single => sanitizeSingle(single, sanitisedIdCallback)) || sanitizeSingle(json, sanitisedIdCallback);
}
