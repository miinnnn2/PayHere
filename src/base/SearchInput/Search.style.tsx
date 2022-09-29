import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  padding: 20px 40px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-weight: bold;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: normal;
  }
`;
