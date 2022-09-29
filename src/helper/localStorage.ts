export const getLocalStorageHandler = <T>({ key }: { key: string }): T => {
  const data = localStorage.getItem(key);
  return JSON.parse(data || `${data}`);
};

export const setLocalStorageHandler = ({
  key,
  value
}: {
  key: string;
  value: string | Record<string, unknown> | unknown[];
}) => {
  typeof value === 'string' ? localStorage.setItem(key, value) : localStorage.setItem(key, JSON.stringify(value));
};
