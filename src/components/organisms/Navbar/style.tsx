import styled from 'styled-components';
interface IBurger {
  open: boolean;
}
export const NavbarWrapper = styled.div<IBurger>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
  width: inherit;
  height: inherit;
  border-radius: 1rem;
  background-color: #4333a0;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const CurrentBalanceWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
  height: 9rem;
  width: 11rem;
  justify-content: center;
  align-items: center;
`;
export const NavItemsWrapper = styled.div`
  flex-direction: column;
  display: flex;

  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    text-transform: uppercase;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
