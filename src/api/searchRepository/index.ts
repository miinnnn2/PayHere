import { typedFetch } from '..';
import { GetSearchRepositoryDataProps, GetSearchRepositoryDataQuery } from './model';

export const getSearchRepositoryData = (querys: GetSearchRepositoryDataQuery) =>
  typedFetch<GetSearchRepositoryDataProps>({
    method: 'GET',
    reqPath: '/api/search/repositories',
    querys
  });
