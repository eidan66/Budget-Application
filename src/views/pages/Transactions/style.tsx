import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 1rem;
  padding: 1rem;
`;

export const AllTransactionsWrapper = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  margin: auto;
  width: 100%;

  justify-content: space-evenly;
  height: 56rem;
  overflow-y: scroll;
`;

export const TransactionWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 2rem;
`;
