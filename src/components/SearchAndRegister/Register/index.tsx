import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RepositoryList from '@base/RepositoryList';
import { GetSearchRepositoryDataItemsProps } from '@api/searchRepository/model';
import { getLocalStorageHandler, setLocalStorageHandler } from '@helper/localStorage';
import { RegisterProps } from '../model';
import * as SC from './Register.style';

const Register = (props: RegisterProps) => {
  const { isUpdated, updateHandler } = props;

  const registeredData = useMemo(() => {
    const data = getLocalStorageHandler<GetSearchRepositoryDataItemsProps[] | null>({ key: 'repositories' });
    return data;
  }, [isUpdated]);

  const deleteButtonHandler = useCallback(
    (item: GetSearchRepositoryDataItemsProps) => {
      if (!registeredData) return;

      const newData = registeredData?.filter((data) => data.id !== item.id);
      setLocalStorageHandler({ key: 'repositories', value: newData });
      updateHandler(!isUpdated);
    },
    [registeredData]
  );

  return (
    <SC.Container>
      <SC.Title>저장된 Repository 목록</SC.Title>
      <SC.RegisteredList>
        {registeredData?.map((item, index) => (
          <SC.RegisteredListItem key={item.id + index}>
            <RepositoryList
              repositoryName={item.full_name}
              repositoryDesc={item.description}
              buttonName={'삭제'}
              buttonHandler={() => deleteButtonHandler(item)}
            />
          </SC.RegisteredListItem>
        ))}
      </SC.RegisteredList>
      {!registeredData || !registeredData.length ? (
        <SC.EmptyMessage>목록이 없습니다.</SC.EmptyMessage>
      ) : (
        <SC.GoToIssueButton>
          <Link to="/issues">이슈 보러가기</Link>
        </SC.GoToIssueButton>
      )}
    </SC.Container>
  );
};

export default Register;
