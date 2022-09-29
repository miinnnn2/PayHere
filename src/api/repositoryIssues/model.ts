export type GetRepositoryIssuesParams = {
  owner: string;
  repo: string;
};

export type GetRepositoryIssuesQuery = {
  page?: number;
};

export type GetRepositoryIssuesDataProps = GetRepositoryIssuesDataItemsProps[];

export type GetRepositoryIssuesDataItemsProps = {
  id: number;
  title: string;
  html_url: string;
};
