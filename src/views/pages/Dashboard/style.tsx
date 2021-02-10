import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row; // column
  width: 100%;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;

    & > div {
      margin-bottom: 2rem;
    }
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;

    & > div {
      margin-bottom: 2rem;
    }
  }
`;

export const ActivityWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaymentWrapper = styled.div`
  margin-left: -2rem;
`;
