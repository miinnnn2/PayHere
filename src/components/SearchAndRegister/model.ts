import { Dispatch, SetStateAction } from 'react';

export type SearchProps = {
  isUpdated: boolean;
  updateHandler: Dispatch<SetStateAction<boolean>>;
};

export type RegisterProps = SearchProps;
