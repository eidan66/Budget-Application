import { size as Size, color as Color, weight as Weight } from '../../models/typography';

export const setSize = (size?: Size) => {
  switch (size) {
    case Size.LG:
      return `font-size:45px;`;

    case Size.MD:
    default:
      return `font-size:30px;`;

    case Size.SM:
      return `font-size:16px;`;
  }
};

export const setColor = (color?: Color) => {
  switch (color) {
    case Color.BLACKCURRANT:
    default:
      return `color:#1a1440`;

    case Color.ULTRAMARINE:
      return `color:rgb(11,12,118);`;

    case Color.MALIBU:
      return `color:rgb(114,197,229);`;

    case Color.BLUEGEM:
      return `color:rgb(67,51,160);`;

    case Color.SERENADE:
      return `color:rgb(252,237,216);`;

    case Color.GHOST:
      return `color:rgb(199,199,201);`;

    case Color.MAIN:
      return `color:rgb(156,143,231);`;
  }
};

export const setWeight = (weight?: Weight) => {
  switch (weight) {
    case Weight.BOLD:
      return `font-weight:bold;`;
    case Weight.LIGHT:
      return `font-weight:250;`;
    default:
      return `font-weight:400;`;
  }
};
