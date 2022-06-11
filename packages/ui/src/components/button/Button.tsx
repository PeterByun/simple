import "./button.scss";
import { ComponentProps, ButtonHtmlProps } from "../../types/component-types";
import {
  mergeClassNames,
  createClassNamesFromStyleProps,
} from "../../utils/component-utils";

interface ButtonProps extends ComponentProps<ButtonHtmlProps> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  let {
    onClick,
    children,
    elementProps,
    size = "md",
    shape = "rounded",
  } = props;

  const classNames = mergeClassNames([
    "sp-button",
    ...createClassNamesFromStyleProps(props),
    size,
    shape,
  ]);

  return (
    <button className={classNames} {...elementProps} onClick={onClick}>
      {children}
    </button>
  );
};
