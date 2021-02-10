import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  display: flex;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 1px rgba(8, 8, 8);
  width: auto;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
  /* position: relative; */
`;

export const NavbarWrapper = styled.div`
  height: 100vh;
  /* margin-right: 1rem; */
  /* position: absolute; */
  z-index: 10;
`;

export const RouterWrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 1rem;
  overflow-y: auto;
  /* margin-left: 1rem; */
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
`;

export const PaymentWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;

  @media screen and (max-width: 1105px) {
    display: none;
  }
`;
