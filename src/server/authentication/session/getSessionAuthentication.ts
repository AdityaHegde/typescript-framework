import {AuthenticationConfig} from "../AuthenticationConfig";
import {RoutesConfig} from "../../routes/RoutesConfig";
import {UserInvite, UserModel} from "../../../models";
import {RouteFactory} from "../../routes/RouteFactory";
import {JsonApiRoute} from "../../routes/JsonApiRoute";
import {SessionAuthentication} from "./SessionAuthentication";

export function getSessionAuthentication(
  authConfig: AuthenticationConfig, routesConfig: RoutesConfig,
  userModel: typeof UserModel, userInvite = UserInvite,
) {
  const authentication = new SessionAuthentication(authConfig, userModel, userInvite);
  const routeFactory = new RouteFactory(JsonApiRoute, routesConfig, authentication);
  return {authentication, routeFactory};
}
