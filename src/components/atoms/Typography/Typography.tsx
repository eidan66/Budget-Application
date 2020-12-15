import * as React from 'react';
import * as I from '../../../models/typography/typography';
import * as S from './style';

const Typography: React.FC<I.Typography> = ({ text, size, color }) => {
  return (
    <S.Typography color={color} size={size}>
      {text}
    </S.Typography>
  );
};

export default Typography;
