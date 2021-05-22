type QueryFilterType = (key: string, value: string, level: number) => boolean;

export function getQueryString(
  query: NodeJS.Dict<any>, filter: QueryFilterType = () => true, parentKey = "", level = 0,
) {
  const queryParams = new Array<string>();
  for (const q in query) {
    if (!Object.prototype.hasOwnProperty.call(query, q)) {
      continue;
    }

    const queryValue = query[q];

    if (!filter(q, queryValue, level + 1) || queryValue === undefined || queryValue === null) {
      continue;
    }

    queryParams.push(getQueryStringFromValue(queryValue, (parentKey ? `${parentKey}.${q}` : q), filter, level));
  }

  return queryParams.join("&");
}

function getQueryStringFromValue(
  queryValue: any, paramKey: string, filter: QueryFilterType, level,
) {
  if (queryValue.map) {
    return queryValue.map((param, i) => {
      return getQueryStringFromValue(param, `${paramKey}[${i}]`, filter, level + 1);
    }).join("&");
  } else if (typeof queryValue === "object") {
    return getQueryString(queryValue, filter, paramKey, level + 1);
  } else {
    return `${paramKey}=${queryValue}`;
  }
}
