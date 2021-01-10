import styled from 'styled-components';

export const ExpensesDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  padding-right: 1.6rem;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.4rem;
  margin-bottom: 0.5rem;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    padding-right: 0.3rem;
  }
  margin-bottom: 0.5rem;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    padding-right: 0.3rem;
  }
  margin-top: 0.5rem;
`;
export const TimeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    padding-right: 0.3rem;
  }
  margin-right: 1.2rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    padding-right: 0.3rem;
  }
`;
