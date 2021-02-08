import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link404Wrapper = styled.div`
  margin-top: -4rem;
  & > a {
    text-decoration: none;
  }

  & > a > span {
    color: #cdcfd7;
    font-size: 2rem;
    font-weight: 800;
  }
`;
