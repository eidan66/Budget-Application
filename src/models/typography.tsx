export enum size {
  LG = 'lg',
  MD = 'md',
  SM = 'sm',
}

export enum color {
  MAIN = 'main',
  ULTRAMARINE = 'ultramarine',
  BLACKCURRANT = 'blackcurrant',
  MALIBU = 'malubu',
  BLUEGEM = 'BlueGem',
  SERENADE = 'serenade',
  GHOST = 'ghost,',
}

export enum weight {
  BOLD = 'bold',
  LIGHT = 'light',
}

export interface Typography {
  color?: color;
  size?: size;
  text: string;
  weight?: weight;
}
