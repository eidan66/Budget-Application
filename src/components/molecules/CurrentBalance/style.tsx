import styled from 'styled-components';
import { palette, PaletteProps, spacing, SpacingProps } from '@material-ui/system'; //From material-ui box style.

export const CurrentBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & > h5 {
    margin-bottom: 1.7rem;
  }
`;
export const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette};
  ${spacing};
  display: inline-block;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #9c8fe730;
  width: 9rem;
`;
