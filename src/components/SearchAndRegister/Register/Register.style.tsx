import styled from 'styled-components';
export { EmptyMessage } from '@pages/Main/Main.style';

export const Container = styled.div``;

export const Title = styled.h1``;

export const RegisteredList = styled.ul`
  margin-top: 50px;
`;

export const RegisteredListItem = styled.li`
  &:not(:first-of-type) {
    margin-top: 40px;
  }
`;

export const GoToIssueButton = styled.button.attrs({ type: 'button' })`
  border: none;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  padding: 15px 30px;
  margin-top: 100px;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    font-weight: bold;
    transform: scale(1.1);
  }
`;
