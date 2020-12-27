import styled from 'styled-components';
import * as T from '../../../types/typography/typography';
import { setSize, setColor, setWeight } from '../../..//helpers/typography/typography';

export const Typography = styled.span<T.TypographyProps>`
  ${(props) => setSize(props.size)}
  ${(props) => setWeight(props.weight)}
  ${(props) => setColor(props.color)}
`;
