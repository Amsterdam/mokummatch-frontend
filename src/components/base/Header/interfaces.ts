type variant = 'body1' | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export interface IHeader {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  style?: any;
  isParagraph?: boolean;
  variant?: variant;
  text: string;
  component?: any;
  to?: string;
  sx?: any
}