import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getLocalStorageHandler } from '@helper/localStorage';
import { getRepositoryIssuesData } from '@api/repositoryIssues';
import { GetSearchRepositoryDataItemsProps } from '@api/searchRepository/model';
import useIntersect from '@hooks/useIntersect';
import { IssueDataStatusProps, IssueListProps, RepositoryListProps } from './model';
import * as SC from './RepositoryIssues.style';

const RepositoryIssues = () => {
  const targetRef = useRef<HTMLLIElement | null>(null);
  const [repositoryList, setRepositoryList] = useState<RepositoryListProps[]>([]);
  const [issueList, setIssueList] = useState<IssueListProps>([]);
  const [issueDataStatus, setIssueDataStatus] = useState<IssueDataStatusProps>({
    pageNumber: 1,
    repositoryIndex: 0,
    getIssueIsLoading: false
  });

  const _ = useIntersect({
    targetRef,
    intersectHandler: () => {
      checkAvailabilityForDataFetching();
    },
    options: { rootMargin: '100px' }
  });

  useEffect(() => {
    const storageRepositoryList = getLocalStorageHandler<GetSearchRepositoryDataItemsProps[] | null>({
      key: 'repositories'
    });

    if (!storageRepositoryList || !storageRepositoryList?.length) return;

    const filteredRepositoryList = storageRepositoryList.map((repository) => ({
      repo: repository.name,
      owner: repository.owner.login
    }));

    setRepositoryList(filteredRepositoryList);
  }, []);

  const checkAvailabilityForDataFetching = useCallback(() => {
    if (issueDataStatus.getIssueIsLoading || !repositoryList.length) return;

    const endIndex = repositoryList.length - 1;
    if (issueDataStatus.repositoryIndex > endIndex) return;

    fetchDataHandler();
  }, [issueDataStatus, repositoryList]);

  const fetchDataHandler = useCallback(async () => {
    setIssueDataStatus({ ...issueDataStatus, getIssueIsLoading: true });

    const isInitialFetching = !issueList.length;
    const { repo, owner } = repositoryList[issueDataStatus.repositoryIndex];
    const page = isInitialFetching ? 1 : issueDataStatus.pageNumber;

    const response = await getRepositoryIssuesData({ repo, owner }, { page });

    if (response.isError) {
      alert(response.message);
      setIssueDataStatus({ ...issueDataStatus, getIssueIsLoading: false });
      return;
    }

    if (!response.data.length) {
      setIssueDataStatus({
        ...issueDataStatus,
        getIssueIsLoading: false,
        repositoryIndex: issueDataStatus.repositoryIndex + 1,
        pageNumber: 1
      });
      return;
    }

    const issuesWithRepositoryInfo = response.data.map((issue) => ({
      ...issue,
      repo,
      owner
    }));

    setIssueList([...issueList, ...issuesWithRepositoryInfo]);
    setIssueDataStatus({ ...issueDataStatus, getIssueIsLoading: false, pageNumber: page + 1 });
  }, [issueDataStatus, repositoryList]);

  return (
    <SC.Container>
      <SC.IssueList>
        {issueList.map((issue, index) => (
          <SC.IssueListItem key={issue.id + index}>
            <SC.Link href={issue.html_url} target="_blank">
              <SC.RepositoryName>{issue.repo}</SC.RepositoryName>
              <SC.RepositoryIssue>{issue.title}</SC.RepositoryIssue>
            </SC.Link>
          </SC.IssueListItem>
        ))}
        <SC.IssueListItem ref={targetRef} isLoading={issueDataStatus.getIssueIsLoading} />
      </SC.IssueList>
    </SC.Container>
  );
};

export default RepositoryIssues;
