import {AuthenticationConfig} from "../AuthenticationConfig";
import {RoutesConfig} from "../../routes/RoutesConfig";
import {UserInvite, UserModel} from "../../../models";
import {JwtAuthentication} from "./JwtAuthentication";
import {RouteFactory} from "../../routes/RouteFactory";
import {JsonApiRoute} from "../../routes/JsonApiRoute";

export function getJwtAuthentication(
  authConfig: AuthenticationConfig, routesConfig: RoutesConfig,
  userModel: typeof UserModel, userInvite = UserInvite,
) {
  const authentication = new JwtAuthentication(authConfig, userModel, userInvite);
  const routeFactory = new RouteFactory(JsonApiRoute, routesConfig, authentication);
  return {authentication, routeFactory};
}
