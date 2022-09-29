export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTION';

export type FetchParams = {
  method: Method;
  reqPath: string;
  querys?: Record<string, unknown>;
};

export type DataProps<T> = {
  data: T;
  isError: boolean;
  message?: string;
};
