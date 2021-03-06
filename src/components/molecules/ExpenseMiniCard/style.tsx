import styled from 'styled-components';

export const ExpenseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
  padding: 1.2rem;
  width: 9rem;
  height: 6rem;
`;
// Category

export const CategoryDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    padding-right: 0.3rem;
  }
  & > p {
    font-size: 1.3rem;
    color: ${({ color }) => color};
    line-height: normal;
    font-weight: normal;
  }
  margin-top: 0.7rem;
`;
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div > svg {
    font-size: 3.188rem;
  }
  margin-top: 0.5rem;

  & > div > svg {
    cursor: pointer;
  }
`;

// Amount
export const AmountDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 1.3rem;
    color: ${({ color }) => color};
    line-height: normal;
  }
  margin-top: 0.7rem;
`;
export const AmountStatusDetailsWrapper = styled.div`
  margin-top: 0.5rem;
  & > p {
    font-size: 0.9rem;
    color: ${({ color }) => color};
    line-height: normal;
    font-weight: normal;
  }
`;
