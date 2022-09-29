import { DataProps, FetchParams } from './model';

export const typedFetch = async <T>(params: FetchParams) => {
  const { method, reqPath, querys = {} } = params;
  const isDevelopEnv = process.env.NODE_ENV === 'development';
  let reqURL = reqPath;
  let body: string | null = null;

  if (!isDevelopEnv) {
    reqURL = reqURL.replace('/api', '');
  }

  if (method === 'GET') {
    reqURL = reqURL + querySerializer(querys);
  } else {
    body = JSON.stringify(querys);
  }

  const res = await fetch(reqURL, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer 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`,
      Accept: 'application/vnd.github.text-match+json'
    },
    mode: 'cors',
    method,
    body
  });

  const parsedResponse = await res.json();

  const data: DataProps<T> = {
    data: Array.isArray(parsedResponse) ? parsedResponse : { ...parsedResponse },
    isError: !res.ok,
    message: !res.ok ? parsedResponse.message : undefined
  };

  return data;
};

export const querySerializer = (queryObj: Record<string, unknown>) => {
  if (!Object.keys(queryObj).length) return '';

  const params = new URLSearchParams();
  Object.keys(queryObj).map((key) => params.append(key, String(queryObj[key])));

  return `?${params.toString()}`;
};
