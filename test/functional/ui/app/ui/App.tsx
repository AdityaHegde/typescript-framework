import React, {useEffect, useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Layout, {Content, Header} from "antd/lib/layout/layout";
import {ProductUser} from "../models/ProductUser";
import {Models} from "../models/Models";
import {AppHeader} from "./AppHeader";
import {ProductCategoryPath, ProductPath} from "./Constants";
import {ProductCategory} from "../models/ProductCategory";
import {Product} from "../models/Product";
import {Spin} from "antd";
import {JsonApiClient, ModelStoreRepository} from "../../../../../src/ui/store";
import {Login, RestrictAccess, Signup, UserContext, useUserContext} from "../../../../../src/ui/user";
import {DataPage} from "../../../../../src/ui";
import {addModelsToList} from "../../../../../src/models";

addModelsToList(Models);
const modelClient = new JsonApiClient("/api");
ModelStoreRepository.instance = new ModelStoreRepository(modelClient);

export function App() {
  const ProductCategoryModelStore = ModelStoreRepository.instance.getOrCreate(ProductCategory.metadata.modelName);
  const ProductModelStore = ModelStoreRepository.instance.getOrCreate(Product.metadata.modelName);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductCategoryModelStore.queryRecords({}).then(() => setLoading(false));
  }, []);

  const userContextType = useUserContext(ProductUser, modelClient, {
    redirect: ProductPath,
  });

  return (
    <UserContext.Provider value={userContextType}>
      <Spin spinning={loading}>
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content style={{ minHeight: "1000px", margin: "25px" }}>
            <Routes>
              <Route key="/login" path="/login" element={<Login />} />
              <Route key="/signup" path="/signup" element={<Signup />} />
              <Route key={ProductPath} path={`${ProductPath}/*`} element={<DataPage modelStore={ProductModelStore} />} />
              <Route key={ProductCategoryPath} path={ProductCategoryPath} element={<DataPage modelStore={ProductCategoryModelStore} />} />
            </Routes>
          </Content>
        </Layout>
      </Spin>
    </UserContext.Provider>
  );
}
