import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 1rem;
  padding: 1rem;
  width: 74.5rem;
  height: 64rem;
`;

/* 
border: 0.01px solid #d1d1d1;
  box-shadow: 0 0 17px #d1d1d1; */

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;

  & > h5 {
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: inline-block;
  margin: 1rem;

  & > div {
    border: 1px solid #d1d1d1;
    box-shadow: 0 0 17px #d1d1d1;
  }

  &:hover {
    -webkit-animation: wobble-hor-top 0.8s both;
    animation: wobble-hor-top 0.8s both;
  }

  @-webkit-keyframes wobble-hor-top {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(6deg);
      transform: translateX(-30px) rotate(6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(-6deg);
      transform: translateX(15px) rotate(-6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(3.6deg);
      transform: translateX(-15px) rotate(3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(-2.4deg);
      transform: translateX(9px) rotate(-2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(1.2deg);
      transform: translateX(-6px) rotate(1.2deg);
    }
  }
  @keyframes wobble-hor-top {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(6deg);
      transform: translateX(-30px) rotate(6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(-6deg);
      transform: translateX(15px) rotate(-6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(3.6deg);
      transform: translateX(-15px) rotate(3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(-2.4deg);
      transform: translateX(9px) rotate(-2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(1.2deg);
      transform: translateX(-6px) rotate(1.2deg);
    }
  }
`;
