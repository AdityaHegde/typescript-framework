import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";
import {UserContext} from "./UserContext";

export function UserDisplayComponent() {
  const userContext = useContext(UserContext);
  return (
    <>
      {(userContext.user as any).user} <Button type="link" onClick={userContext.logout}>Logout</Button>
    </>
  );
}

export function UserDisplay() {
  const userContext = useContext(UserContext);

  return (
    <div >{userContext.user ? <UserDisplayComponent /> : <Link to="/login">Login</Link>}</div>
  );
}
