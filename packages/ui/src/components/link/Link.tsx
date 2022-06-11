import "./link.scss";
import {
  ComponentProps,
  LinkHtmlProps,
  ColorLevelProp,
  Size,
  Shape,
} from "../../types/component-types";
import { COLOR_NAME } from "../../constants/component-constants";
import {
  getColorClassNames,
  mergeClassNames,
} from "../../utils/component-utils";

interface LinkProps extends ComponentProps<LinkHtmlProps> {
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

  const classNames = mergeClassNames([
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
