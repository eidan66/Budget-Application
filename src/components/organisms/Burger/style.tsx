import styled from 'styled-components';

interface IBurger {
  open: boolean;
}

export const StyledBurger = styled.button<IBurger>`
  display: none;
  visibility: hidden;
  opacity: 0;
  @media screen and (max-width: 1200px) {
    visibility: visible;
    opacity: 1;
    background: transparent;
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? '#EFFFFA' : '#0D0C1D')};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
