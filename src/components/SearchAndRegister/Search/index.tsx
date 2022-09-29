import React, { useCallback, useRef, useState } from 'react';
import { DataProps } from '@api/model';
import { getSearchRepositoryData } from '@api/searchRepository';
import { GetSearchRepositoryDataItemsProps, GetSearchRepositoryDataProps } from '@api/searchRepository/model';
import { RepositoryList, SearchInput } from '@base';
import useIntersect from '@hooks/useIntersect';
import { getLocalStorageHandler, setLocalStorageHandler } from '@helper/localStorage';
import { SearchProps } from '../model';
import * as SC from './Search.style';

const registerLimit = 4;

const Search = (props: SearchProps) => {
  const { isUpdated, updateHandler } = props;
  const targetRef = useRef<HTMLLIElement | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchDataStatus, setSearchDataStatus] = useState<{
    searchRepositoryIsLoading: boolean;
    searchRepositoryData: DataProps<GetSearchRepositoryDataProps> | null;
  }>({
    searchRepositoryIsLoading: false,
    searchRepositoryData: null
  });
  const _ = useIntersect({
    targetRef,
    intersectHandler: () => {
      if (!searchDataStatus.searchRepositoryData?.data.items.length) return;

      const totalPage = Math.ceil(searchDataStatus.searchRepositoryData?.data.total_count / 30);
      pageNumber <= totalPage && fetchDataStatusHandler({ isInitialFetching: false });
    },
    options: { rootMargin: '300px' }
  });

  const enterKeyHandler = () => {
    if (!searchKeyword) {
      alert('한 글자 이상 입력해주세요');
      return;
    }

    fetchDataStatusHandler({ isInitialFetching: true });
  };

  const fetchDataStatusHandler = useCallback(
    async ({ isInitialFetching }: { isInitialFetching: boolean }) => {
      if (searchDataStatus.searchRepositoryIsLoading) return;

      setSearchDataStatus({ ...searchDataStatus, searchRepositoryIsLoading: true });

      const page = isInitialFetching ? 1 : pageNumber;
      const response = await getSearchRepositoryData({ q: searchKeyword, page });

      if (response.isError) {
        alert(response.message);
        setSearchDataStatus({ ...searchDataStatus, searchRepositoryIsLoading: false });
        return;
      }

      setPageNumber(page + 1);

      if (isInitialFetching) {
        setSearchDataStatus({ ...searchDataStatus, searchRepositoryIsLoading: false, searchRepositoryData: response });
        return;
      }

      if (searchDataStatus.searchRepositoryData?.data.items.length) {
        const existingItems = searchDataStatus.searchRepositoryData?.data.items;

        setSearchDataStatus({
          ...searchDataStatus,
          searchRepositoryData: {
            ...searchDataStatus.searchRepositoryData,
            data: {
              ...searchDataStatus.searchRepositoryData.data,
              items: [...existingItems, ...response.data.items]
            }
          },
          searchRepositoryIsLoading: false
        });
      }
    },
    [searchKeyword, pageNumber, searchDataStatus]
  );

  const addButtonHandler = (item: GetSearchRepositoryDataItemsProps) => {
    const existingData = getLocalStorageHandler<GetSearchRepositoryDataItemsProps[] | null>({ key: 'repositories' });

    if (existingData?.length === registerLimit) {
      alert('최대 4개까지만 등록이 가능합니다.');
      return;
    }

    const newData = existingData ? [...existingData, item] : [item];
    setLocalStorageHandler({ key: 'repositories', value: newData });
    updateHandler(!isUpdated);
  };

  return (
    <>
      <SearchInput
        placeholder="Repository명 입력 후 엔터버튼을 눌러주세요!"
        inputHandler={({ target: { value } }) => setSearchKeyword(value)}
        enterKeyHandler={enterKeyHandler}
      />
      <SC.SearchResultList>
        {searchDataStatus.searchRepositoryData?.data.items.map((item, index) => (
          <SC.SearchResultListItem key={item.id + index}>
            <RepositoryList
              repositoryName={item.full_name}
              repositoryDesc={item.description}
              buttonName={'등록'}
              buttonHandler={() => addButtonHandler(item)}
            />
          </SC.SearchResultListItem>
        ))}
        <SC.SearchResultListItem ref={targetRef} isLoading={searchDataStatus.searchRepositoryIsLoading} />
      </SC.SearchResultList>
    </>
  );
};

export default Search;
