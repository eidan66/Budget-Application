import styled from 'styled-components';

export const TransactionContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TransactionWrapper = styled.div``;

export const LoaderWrapper = styled.div`
  width: 80rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > h5 {
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;
