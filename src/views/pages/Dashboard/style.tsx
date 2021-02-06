import styled from 'styled-components';

const flex_row = `
display: flex;
flex-direction: row;

`;

export const PageWrapper = styled.div`
  ${flex_row}
  width: 100%;
`;
export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  ${flex_row}
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const SummaryWrapper = styled.div`
  ${flex_row}
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const ActivityWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaymentWrapper = styled.div`
  margin-left: -2rem;
`;
