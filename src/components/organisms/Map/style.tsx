import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: 100vh;
`;
export const PopupWrapper = styled.div`
  height: 150px;
  padding: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  & > h5 {
    font-size: 2rem;
    letter-spacing: 5px;
  }
`;

export const ExitWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 99999;
  margin-left: 1rem;
  cursor: pointer;
`;
