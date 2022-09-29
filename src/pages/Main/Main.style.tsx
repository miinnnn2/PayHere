import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

export const LeftContainer = styled.div`
  width: 50%;
  min-height: 100%;
  height: fit-content;
  padding: 100px;
  border-right: 3px solid ${({ theme }) => theme.colors.lightGray};
`;

export const RightContainer = styled(LeftContainer)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border-right: none;
`;

export const EmptyMessage = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;
