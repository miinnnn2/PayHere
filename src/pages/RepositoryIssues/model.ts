import { GetRepositoryIssuesDataItemsProps } from '@api/repositoryIssues/model';

export type RepositoryListProps = {
  repo: string;
  owner: string;
};

export type IssueListProps = (GetRepositoryIssuesDataItemsProps & RepositoryListProps)[];

export type IssueDataStatusProps = {
  pageNumber: number;
  repositoryIndex: number;
  getIssueIsLoading: boolean;
};
