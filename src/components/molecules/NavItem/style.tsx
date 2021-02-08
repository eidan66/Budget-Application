import styled from 'styled-components';

export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.7rem;

  & > h6 {
    color: ${({ color }) => color};
  }
`;

export const NavItemContainer = styled.div`
  & > a {
    text-decoration: none;
  }
`;
