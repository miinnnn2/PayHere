import { typedFetch } from '..';
import { GetRepositoryIssuesDataProps, GetRepositoryIssuesParams, GetRepositoryIssuesQuery } from './model';

export const getRepositoryIssuesData = (params: GetRepositoryIssuesParams, querys: GetRepositoryIssuesQuery) =>
  typedFetch<GetRepositoryIssuesDataProps>({
    method: 'GET',
    reqPath: `/api/repos/${params.owner}/${params.repo}/issues`,
    querys
  });
