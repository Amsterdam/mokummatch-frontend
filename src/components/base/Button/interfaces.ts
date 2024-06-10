export interface IButtonProps {
  sx?: any;
  backgroundColor?: string;
  color?: string;
  margin?: string;
  onClick?: (val: any) => any;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  label?: string;
  component?: any;
  to?: string;
  startIcon?: any;
  loading?: boolean;
  children?: React.ReactNode; 
}
