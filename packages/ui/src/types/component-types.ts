import { LinkHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface ComponentProps<P> {
  // base
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  elementProps?: P;
  // appearence
  primary?: ColorLevelProp;
  secondary?: ColorLevelProp;
  size?: Size;
  shape?: Shape;
  outlined?: boolean;
}

export type LinkHtmlProps = LinkHTMLAttributes<HTMLAnchorElement>;
export type ButtonHtmlProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ColorLevel = 1 | 2 | 3;
export type ColorLevelProp = boolean | ColorLevel;
export type ColorNameAndColorLevel = [string, ColorLevelProp];

export type Size = "sm" | "md" | "lg";
export type Shape = "sharp" | "rounded" | "circle";
