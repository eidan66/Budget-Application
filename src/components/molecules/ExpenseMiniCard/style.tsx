import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
