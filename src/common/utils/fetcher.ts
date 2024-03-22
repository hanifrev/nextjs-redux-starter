export interface FetchRequest<Req> {
  path: string;
  data?: Req;
  query?: { [key: string]: string | number };
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
  headers?: RequestInit['headers'];
  options?: RequestInit;
  isExternal?: boolean;
}

async function fetcher<Res, Req = never>({
  path,
  data,
  query,
  method = 'GET',
  headers = {},
  options,
  isExternal = false,
}: FetchRequest<Req>): Promise<Res> {
  let responseData: any;

  try {
    const apiURL = isExternal
      ? process.env.NEXT_PUBLIC_API_URL
      : `${process.env.NEXT_PUBLIC_URL}/api`;

    const url = new URL(`${apiURL}${path}`);

    if (query) {
      Object.keys(query).forEach((key) =>
        url.searchParams.append(key, query[key].toString())
      );
    }

    const response = await fetch(url.href, {
      method: method,
      body: data ? JSON.stringify(data) : undefined,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...options,
    });

    console.log('STATUS:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    responseData = await response.json();
  } catch (error) {
    console.error('Fetch Error:', error);
    throw error;
  }

  return responseData;
}

export default fetcher;
