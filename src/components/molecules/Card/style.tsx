import styled from 'styled-components';

import cardBackground from '../../../assets/images/cardBackground.png';

export const Card = styled.div`
  background-image: url(${cardBackground});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  width: 21.5rem;
  height: 12.89rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
  & > div > span {
    color: ${({ color }) => color};
  }
`;

export const CardNumberWrapper = styled.div`
  padding-top: 4rem;
  word-spacing: 0.5em;
`;

export const CardHolderWrapper = styled.div``;
export const CardDateWrapper = styled.div``;
