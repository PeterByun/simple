import {
  ColorLevelProp,
  ColorNameAndColorLevel,
} from "../types/component-types";
import { COLOR_NAME } from "../constants/component-constants";

export type StyleProps = {
  disabled?: boolean;
  outlined?: boolean;
  primary?: ColorLevelProp;
  secondary?: ColorLevelProp;
  className?: string;
};

export const getColorClassName = (
  colorName: string,
  colorLevel: ColorLevelProp
) => {
  if (!colorLevel) return null;
  return `${colorName}-${colorLevel === true ? 1 : colorLevel}`;
};
export const getColorClassNames = (
  colorNameAndColorLevelList: ColorNameAndColorLevel[]
) => {
  return colorNameAndColorLevelList.map(([colorName, colorLevel]) => {
    return getColorClassName(colorName, colorLevel);
  });
};

export const createClassNamesFromStyleProps = (props: StyleProps) => {
  const classNamesFromProps = [
    ...getColorClassNames([
      [COLOR_NAME.PRIMARY, props.primary],
      [COLOR_NAME.SECONDARY, props.secondary],
    ]),
  ];
  if (props.className) classNamesFromProps.push(props.className);
  if (props.disabled) classNamesFromProps.push(COLOR_NAME.DISABLED);
  if (props.outlined) classNamesFromProps.push(COLOR_NAME.OUTLINED);

  return classNamesFromProps;
};

export const mergeClassNames = (classes: (string | null | undefined)[]) => {
  return classes.filter((className) => typeof className === "string").join(" ");
};
