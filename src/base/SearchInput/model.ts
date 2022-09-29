import React from 'react';

export type SearchInputProps = {
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  enterKeyHandler?: () => void;
  placeholder?: string;
};
