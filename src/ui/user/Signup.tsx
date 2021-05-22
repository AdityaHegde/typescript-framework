import React, {useContext} from "react";
import Form from "antd/lib/form";
import {Button} from "antd";
import { Link } from "react-router-dom";
import {UserContext} from "./UserContext";
import {ModelFormItems} from "../form";

export function Signup() {
  const userContext = useContext(UserContext);

  const onFinish = (values) => {
    userContext.signup(values);
  }

  return (
    <Form onFinish={onFinish}>
      <ModelFormItems model={userContext.userModel} />
      <Form.Item>
        <Button type="primary" htmlType="submit">Signup</Button>
        <Link to="/login">Login</Link>
      </Form.Item>
    </Form>
  )
}
