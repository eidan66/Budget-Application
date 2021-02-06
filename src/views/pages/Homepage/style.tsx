import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  display: flex;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 1px rgba(8, 8, 8);
  width: auto;
  height: 100vh;
  overflow: hidden;
`;

export const NavbarWrapper = styled.div`
  z-index: 1;
  width: 15.5rem;
  height: 100vh;
`;

export const RouterWrapper = styled.div`
  z-index: 9999;
  margin-left: -1.5rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  overflow-y: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const PaymentWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
