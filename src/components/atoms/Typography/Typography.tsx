import * as React from 'react';
import * as I from '../../../models/typography/typography';
import * as E from '../../../containers/enums/typography/typography';
import * as S from './style';

const Typography: React.FC<I.Typography> = ({ text, size, weight = E.weight.BOLD, color }) => {
  return (
    <S.Typography color={color} size={size} weight={weight}>
      {text}
    </S.Typography>
  );
};

export default Typography;
