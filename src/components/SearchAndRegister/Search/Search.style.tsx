import styled, { css, keyframes } from 'styled-components';

const loadingKeyframe = keyframes`
  from {
    width: 0%
  }

  to {
    width: 100%;
  }
`;

export const SearchResultList = styled.ul`
  margin-top: 50px;
`;

export const SearchResultListItem = styled.li<{ isLoading?: boolean }>`
  &:not(type-of-first) {
    margin-top: 15px;
  }

  ${({ isLoading, theme }) => {
    if (isLoading) {
      return css`
        background-color: ${theme.colors.lightGray};
        padding: 10px 0;
        border-radius: 5px;
        animation: ${loadingKeyframe} 1.5s infinite;
      `;
    }
  }}
`;
