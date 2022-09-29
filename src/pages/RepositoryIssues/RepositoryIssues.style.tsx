import styled from 'styled-components';
export { SearchResultList as IssueList } from '@components/SearchAndRegister/Search/Search.style';
export { SearchResultListItem as IssueListItem } from '@components/SearchAndRegister/Search/Search.style';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px;
`;

export const Link = styled.a`
  display: block;
  color: #000000;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 20px 40px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const RepositoryName = styled.p`
  font-size: 14px;
`;

export const RepositoryIssue = styled.p`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main};
`;
