import styled from 'styled-components';

export const ChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 100%;
`;

export const MobileMessage = styled.h1`
  display: none;
  visibility: hidden;
  opacity: 0;
  @media screen and (max-width: 470px) {
    display: flex;
    visibility: visible;
    opacity: 1;
    text-align: center;
    margin-top: 4rem;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const PaymentChartWrapper = styled.div`
  box-shadow: 0 0 5px #333;
  border-radius: 1rem;
  padding: 1rem;
  width: 90%;
`;
