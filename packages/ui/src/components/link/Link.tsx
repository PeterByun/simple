import { LinkHTMLAttributes } from "react";
import "./link.scss";

type ColorLevel = 1 | 2 | 3;
type ColorLevelProp = boolean | ColorLevel;
type Size = "sm" | "md" | "lg";
type Shape = "sharp" | "rounded" | "circle";

interface LinkProps {
  // base
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  elementProps?: LinkHTMLAttributes<HTMLAnchorElement>;
  // features
  href: string;
  rel?: string;
  openNewTab?: boolean;
  // Appearence
  primary?: ColorLevelProp;
  secondary?: ColorLevelProp;
  size?: Size;
  shape?: Shape;
  outlined?: boolean;
}

type ColorNameAndColorLevel = [string, ColorLevelProp];

const COLOR_NAME = {
  DISABLED: "disabled",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINED: "outlined",
} as const;

const getColorClassName = (colorName: string, colorLevel: ColorLevelProp) => {
  if (!colorLevel) return null;
  return `${colorName}-${colorLevel === true ? 1 : colorLevel}`;
};
const getColorClassNames = (
  colorNameAndColorLevelList: ColorNameAndColorLevel[]
) => {
  return colorNameAndColorLevelList.map(([colorName, colorLevel]) => {
    return getColorClassName(colorName, colorLevel);
  });
};

const mergeClasses = (classes: (string | null | undefined)[]) => {
  return classes.filter((className) => typeof className === "string").join(" ");
};

export const Link = (props: LinkProps) => {
  let {
    href,
    rel,
    children,
    className,
    disabled,
    openNewTab,
    elementProps,
    primary,
    secondary,
    size = "md",
    shape = "rounded",
    outlined,
  } = props;

  if (disabled) {
    href = null;
    rel = null;
  }

  let target = "_self";
  if (openNewTab) {
    target = "_blank";
    if (rel) rel += "noopener noreferrer";
  }

  const classNamesFromProps = [
    ...getColorClassNames([
      [COLOR_NAME.PRIMARY, primary],
      [COLOR_NAME.SECONDARY, secondary],
    ]),
  ];
  if (className) classNamesFromProps.push(className);
  if (disabled) classNamesFromProps.push(COLOR_NAME.DISABLED);
  if (outlined) classNamesFromProps.push(COLOR_NAME.OUTLINED);

  const classNames = mergeClasses([
    "sp-link",
    ...classNamesFromProps,
    size,
    shape,
  ]);

  return (
    <a
      className={classNames}
      href={href}
      rel={rel}
      target={target}
      {...elementProps}
    >
      {children}
    </a>
  );
};
