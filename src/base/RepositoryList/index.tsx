import React from 'react';
import { RepositoryListProps } from './model';
import * as SC from './RepositoryList.style';

const RepositoryList = (props: RepositoryListProps) => {
  const { repositoryName, repositoryDesc, buttonName, buttonHandler } = props;
  return (
    <SC.Container>
      <SC.ItemDetail>
        <SC.ItemName>{repositoryName}</SC.ItemName>
        <SC.ItemDesc>{repositoryDesc}</SC.ItemDesc>
      </SC.ItemDetail>
      {buttonHandler && <SC.RegisterButton onClick={buttonHandler}>{buttonName}</SC.RegisterButton>}
    </SC.Container>
  );
};

export default RepositoryList;
