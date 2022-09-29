export type GetSearchRepositoryDataQuery = {
  q: string;
  page?: number;
};

export type GetSearchRepositoryDataProps = {
  total_count: number;
  incomplete_results: boolean;
  items: GetSearchRepositoryDataItemsProps[];
};

export type GetSearchRepositoryDataItemsProps = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  name: string;
  owner: {
    id: number;
    login: string;
  };
};
