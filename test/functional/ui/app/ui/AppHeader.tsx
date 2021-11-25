import {Col, Row} from "antd/lib/grid";
import Menu from "antd/lib/menu";
import React from "react";
import { Link } from "react-router-dom";
import {ProductCategoryPath, ProductPath} from "./Constants";
import {useRoutePath} from "../../../../../src/ui";
import {UserDisplay} from "../../../../../src/ui/user";

export function AppHeader() {
  const rootPath = useRoutePath();

  return (
    <>
      <Row gutter={16}>
        <Col span={2}>
          <div className="logo" />
        </Col>
        <Col span={20}>
          <Menu theme="dark" mode="horizontal" selectedKeys={[rootPath]}>
            <Menu.Item key={ProductCategoryPath}><Link to={ProductCategoryPath}>Product Categories</Link></Menu.Item>
            <Menu.Item key={ProductPath}><Link to={ProductPath}>Products</Link></Menu.Item>
          </Menu>
        </Col>
        <Col span={2}><UserDisplay /></Col>
      </Row>
    </>
  );
}
