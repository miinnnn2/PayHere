import React from 'react';
import { SearchInputProps } from './model';
import * as SC from './Search.style';

const SearchInput = (props: SearchInputProps) => {
  const { placeholder = '검색어를 입력해주세요', inputHandler, enterKeyHandler } = props;

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (enterKeyHandler) {
      event.key === 'Enter' && enterKeyHandler();
    }
  };

  return <SC.Container placeholder={placeholder} onChange={inputHandler} onKeyUp={keyUpHandler} />;
};

export default SearchInput;
