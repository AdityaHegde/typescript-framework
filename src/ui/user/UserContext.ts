import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchGet, fetchPost} from "../utils/fetch";
import {ModelClient} from "../store";
import {UserModel} from "../../models";

export type UserContextType = {
  user: UserModel;
  userModel: typeof UserModel;
  login: (userData: any) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
}

export type EndpointOptions = {
  authBase?: string;
  user?: string;
  login?: string;
  signup?: string;
  logout?: string;
  redirect?: string;
  loginRedirect?: string;
}
export const EndpointOptionsDefault: EndpointOptions = {
  authBase: "/auth/",
  user: "user",
  login: "login",
  signup: "signup",
  logout: "logout",
  redirect: "/",
  loginRedirect: "/login",
}

export function useUserContext(
  userModel: typeof UserModel, modelClient: ModelClient,
  endpointArgOpts: EndpointOptions = EndpointOptionsDefault,
): UserContextType {
  const navigate = useNavigate();

  const endpointOpts = {
    ...EndpointOptionsDefault,
    ...endpointArgOpts,
  };

  useEffect(() => {
    fetchGet(`${endpointOpts.authBase}${endpointOpts.user}`)
      .then(authRespJson => {
        if (authRespJson) {
          setUserContextTypeWrapper(modelClient.deserialize(userModel, authRespJson));
        }
        navigate(endpointOpts.redirect, {replace: true});
      }, () => navigate(endpointOpts.loginRedirect, {replace: true}));
  }, []);

  const logout = async () => {
    await fetchPost(`${endpointOpts.authBase}${endpointOpts.logout}`, {});
    setUserContextTypeWrapper(null);
    navigate(endpointOpts.loginRedirect, {replace: true})
  };

  const authenticate = async (userData: any, endpoint: string) => {
    const authRespJson = await fetchPost(`${endpointOpts.authBase}${endpoint}`, userData);
    setUserContextTypeWrapper(modelClient.deserialize(userModel, authRespJson));
    navigate(endpointOpts.redirect, {replace: true});
  };

  const login = (userData: any) => {
    return authenticate(userData, endpointOpts.login);
  };

  const signup = (userData: any) => {
    return authenticate(userData, endpointOpts.signup);
  };

  const [userContextType, setUserContextType] = useState<UserContextType>({
    user: null,
    userModel,
    login,
    signup,
    logout,
  });

  const setUserContextTypeWrapper = (user: UserModel) => {
    setUserContextType({
      user,
      userModel,
      login,
      signup,
      logout,
    });
  }

  return userContextType;
}

export const UserContext = createContext<UserContextType>(null);
