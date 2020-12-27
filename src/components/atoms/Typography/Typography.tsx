import * as React from 'react';
import * as I from '../../../models/typography';
import { weight as TypoWeight } from '../../../models/typography';
import * as S from './style';

const Typography: React.FC<I.Typography> = ({ text, size, weight = TypoWeight.BOLD, color }) => {
  return (
    <S.Typography color={color} size={size} weight={weight}>
      {text}
    </S.Typography>
  );
};

export default Typography;
