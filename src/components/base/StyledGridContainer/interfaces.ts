import { ReactNode } from "react";

export interface IStyledGridContainerProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  spacing?: number;
  children?: ReactNode;
}