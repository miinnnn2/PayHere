import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const ItemDetail = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemEllipsis = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const ItemName = styled(ItemEllipsis)`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemDesc = styled(ItemEllipsis)`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const RegisterButton = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  white-space: nowrap;
  border-radius: 5px;

  &:hover {
    font-weight: bold;
    transform: scale(1.05);
  }
`;
