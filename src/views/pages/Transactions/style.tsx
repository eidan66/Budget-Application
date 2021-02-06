import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 1rem;
  padding: 1rem;
  width: 74.5rem;
`;

export const AllTransactionsWrapper = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  margin: auto;
  width: 100%;

  justify-content: center;
  height: 56rem;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
`;

export const TransactionWrapper = styled.div`
  scroll-snap-align: start;
  flex: 1 0 21%;
  margin-bottom: 2rem;
`;
