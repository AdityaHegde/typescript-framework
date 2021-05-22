import React, {useContext} from "react";
import Form from "antd/lib/form";
import {Button, Input} from "antd";
import { Link } from "react-router-dom";
import {UserContext} from "./UserContext";

export function Login() {
  const userContext = useContext(UserContext);

  const onFinish = (values) => {
    userContext.login(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item key="user" label="User Name" name="user" >
        <Input />
      </Form.Item>
      <Form.Item key="pwd" label="Password" name="pwd">
        <Input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Login</Button>
        <Link to="/signup">Signup</Link>
      </Form.Item>
    </Form>
  );
}
