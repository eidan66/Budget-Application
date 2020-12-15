import * as E from '../../enums/typography/typography';

export const setSize = (size?: E.size) => {
  switch (size) {
    case E.size.LG:
      return `font-size:50px;`;

    case E.size.MD:
      return `font-size:35px;`;

    case E.size.SM:
      return `font-size:15px;`;

    default:
      return `font-size:5px;`;
  }
};

export const setColor = (color: E.color) => {
  switch (color) {
    case E.color.BLUE:
      return `color:blue;`;

    case E.color.RED:
      return `color:red;`;

    default:
      return `color:green`;
  }
};
