import * as E from '../../enums/typography/typography';

export const setSize = (size?: E.size) => {
  switch (size) {
    case E.size.LG:
      return `font-size:45px;`;

    case E.size.MD:
    default:
      return `font-size:30px;`;

    case E.size.SM:
      return `font-size:16px;`;
  }
};

export const setColor = (color?: E.color) => {
  switch (color) {
    case E.color.BLACKCURRANT:
    default:
      return `color:#1a1440`;

    case E.color.ULTRAMARINE:
      return `color:rgb(11,12,118);`;

    case E.color.MALIBU:
      return `color:rgb(114,197,229);`;

    case E.color.BLUEGEM:
      return `color:rgb(67,51,160);`;

    case E.color.SERENADE:
      return `color:rgb(252,237,216);`;

    case E.color.GHOST:
      return `color:rgb(199,199,201);`;

    case E.color.MAIN:
      return `color:rgb(156,143,231);`;
  }
};

export const setWeight = (weight?: E.weight) => {
  switch (weight) {
    case E.weight.BOLD:
      return `font-weight:bold;`;
    case E.weight.LIGHT:
      return `font-weight:250;`;
    default:
      return `font-weight:400;`;
  }
};
