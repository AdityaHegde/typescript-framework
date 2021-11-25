import {MongooseStoreModel, MongooseStoreModelFactory} from "../../src/server/datastore/mongoose";
import {Models} from "../functional/ui/app/models/Models";
import {ProductCategory} from "../functional/ui/app/models/ProductCategory";
import {Product} from "../functional/ui/app/models/Product";
import {ProductUser} from "../functional/ui/app/models/ProductUser";
import got from "got";
import {HydratedDocument} from "mongoose";
import {ServerTestSuiteParameter} from "../test-bases/getServerTestSuiteParameter";

export const ADMIN_USER = {
  user: "admin", email: "a@a.com", pwd: "a", role: [0],
};
export const USERS = [{
  user: "mod", email: "m@m.com", pwd: "m", role: [1, 3],
}, {
  user: "seller1", email: "s1@s.com", pwd: "s1", role: [2, 3],
}, {
  user: "seller2", email: "s2@s.com", pwd: "s2", role: [2, 3],
}, {
  user: "user1", email: "u1@u.com", pwd: "u1", role: [3],
}, {
  user: "user2", email: "u2@u.com", pwd: "u2", role: [3],
}];

const PRODUCT_CATEGORIES = [{
  name: "Chair",
}, {
  name: "Table",
}, {
  name: "Bed",
}];
export const CHAIR_PRODUCTS = [{
  name: "Recliner",
  price: 5000,
  desc: "A recliner chair",
}, {
  name: "Gaming Chair",
  price: 15000,
  desc: "A gaming chair",
}, {
  name: "Office Chair",
  price: 10000,
  desc: "An office chair",
}];

export async function bootstrapE2EData(serverTestSuiteParameter: ServerTestSuiteParameter) {
  const modelFactory = serverTestSuiteParameter.server.dataStore.dataStoreModelFactory as MongooseStoreModelFactory;

  await Promise.all(Models.map(async (model) => {
    const modelStore = modelFactory.getDataStoreModel(model.metadata.modelName) as MongooseStoreModel;
    await modelStore.mongooseModel.deleteMany({}).exec();
  }));

  await serverTestSuiteParameter.server.authentication.claimAdmin(ADMIN_USER);
  await Promise.all(USERS.map(user => got.post(`${serverTestSuiteParameter.ServerBaseUrl}/auth/signup`, {json: user})));

  const productCategoryModelStore = modelFactory.getDataStoreModel(ProductCategory.metadata.modelName) as MongooseStoreModel;
  const productModelStore = modelFactory.getDataStoreModel(Product.metadata.modelName) as MongooseStoreModel;
  const userModelStore = modelFactory.getDataStoreModel(ProductUser.metadata.modelName) as MongooseStoreModel;

  const seller1 = await userModelStore.querySingle({user: "seller1"});
  const seller2 = await userModelStore.querySingle({user: "seller2"});
  const user1 = await userModelStore.querySingle({user: "user1"});

  let chairModel: HydratedDocument<any>;

  await Promise.all(PRODUCT_CATEGORIES.map(async (category) => {
    const model = await productCategoryModelStore.mongooseModel.create(category);
    if (category.name === "Chair") {
      chairModel = model;
    }
  }));

  await Promise.all(CHAIR_PRODUCTS.slice(0, 1).map(async (product) => {
    await productModelStore.mongooseModel.create({
      ...product,
      categoryId: chairModel._id,
      listerId: seller1._id,
    });
  }));
  await Promise.all(CHAIR_PRODUCTS.slice(1).map(async (product) => {
    await productModelStore.mongooseModel.create({
      ...product,
      categoryId: chairModel._id,
      listerId: seller2._id,
    });
  }));
}
