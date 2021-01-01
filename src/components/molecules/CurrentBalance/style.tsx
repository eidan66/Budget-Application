import React from 'react';
import styled from 'styled-components';
import { palette, PaletteProps, spacing, SpacingProps } from '@material-ui/system'; //From material-ui box style.

export const CurrentBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 4rem;
`;
export const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette};
  ${spacing};
  display: inline-block;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #9c8fe730;
`;
