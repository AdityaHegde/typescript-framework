import React, {PropsWithChildren, useContext} from "react";
import {UserContext} from "./UserContext";

type RestrictAccessProps = {
  role: any;
}

export function RestrictAccess(props: PropsWithChildren<RestrictAccessProps>) {
  const userContext = useContext(UserContext);
  const checker = userContext?.userModel?.getUserRoleChecker(props.role);

  return (
    <>
      {!props.role || checker?.(userContext.user) ?
        props.children : ""}
    </>
  )
}
