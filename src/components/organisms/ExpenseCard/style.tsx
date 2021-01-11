import styled from 'styled-components';

export const ExpenseWrapper = styled.div`
  border-radius: 1rem;
  border-top: 0.45rem solid ${({ color }) => (color ? color : 'none')};
  background-color: rgba(199, 199, 201, 0.192);
  padding: 1rem;
  height: 28rem;
  width: 25rem;
`;

export const ExpenseDetailsWrapper = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
`;

export const ExpenseCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpenseMiniCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2rem;
`;
