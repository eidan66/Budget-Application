import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: white;
  padding: 1.2rem;
  width: 20rem;
  height: 10 rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1.3rem;
  & > h5 {
    font-weight: bold;
  }
`;

export const RevenueWrapper = styled.div`
  margin-bottom: 0.5rem;
  & > h5 {
    font-size: 2.2rem;
    color: ${({ color }) => color + 'aa'};
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  & > div > svg {
    width: 2.2em;
    height: 2.2em;
    background-color: #f5f5f570;
    border: 2px solid #c5c0e554;
    border-radius: 50%;
  }
  display: flex;
  flex-direction: row;
  justify-content: end;

  margin-top: -4.5rem;
`;
