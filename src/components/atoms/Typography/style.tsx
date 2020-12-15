import styled from 'styled-components';
import * as T from '../../../types/typography/typography';
import { setSize, setColor } from '../../../containers/helpers/typography/typography';

export const Typography = styled.p<T.TypographyProps>`
  ${(props) => setSize(props.size)}
  ${(props) => setColor(props.color)}
`;
