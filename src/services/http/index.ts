/**
 * Fetch wrapper for different methods
 * 
 * @example
 * const response = await POST<{ id: number }>(
 * "https://example.com/api",
 * { name: "cat", body: "meow" }
 *  );
 */

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function HTTP<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    request
  );

  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export async function GET<T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<HttpResponse<T>> {
  return await HTTP<T>(new Request(`${path}`, args));
};

export async function POST<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
): Promise<HttpResponse<T>> {
  return await HTTP<T>(new Request(`${path}`, args));
};

export async function PUT<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: "put",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
): Promise<HttpResponse<T>> {
  return await HTTP<T>(new Request(`${path}`, args));
};
