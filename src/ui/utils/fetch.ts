export function fetchGet(url) {
  return fetchWrapper(url, "GET");
}

export function fetchPost(url, bodyJson) {
  return fetchWrapper(url, "POST", bodyJson);
}

export async function fetchWrapper(
  url: string, method: string, data?: any,
): Promise<any> {
  const response = await fetch(url, {
    method,
    ...(data ? {
      body: JSON.stringify(data),
    } : {}),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
