import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 1rem;
  padding: 1rem;
  @media screen and (max-width: 470px) {
    overflow: hidden;
  }
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
  @media screen and (max-width: 470px) {
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const TransactionWrapper = styled.div`
  scroll-snap-align: start;
  flex: 1 0 21%;
  margin-bottom: 2rem;

  @media screen and (max-width: 470px) {
    flex: 0;
  }
`;
