import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const ROOT_PATH_MATCH = /(\/.*?)($|\/)/;

function getRootPath(location, basePath: string) {
  const rootPathsMath = location.pathname.replace(new RegExp(`^${basePath}`), "").match(ROOT_PATH_MATCH);
  return rootPathsMath[1];
}

export function useRoutePath(basePath = "") {
  const [rootPath, setRootPath] = useState<string>("/");
  const location = useLocation();

  useEffect(() => {
    setRootPath(getRootPath(location, basePath));
  }, [location]);

  return rootPath;
}
