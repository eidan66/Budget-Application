import styled from 'styled-components';
import { palette, PaletteProps, spacing, SpacingProps } from '@material-ui/system'; //From material-ui box style.

export const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  min-height: 7rem;
`;
export const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette};
  ${spacing};
  display: inline-block;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fdf4e794;
`;
