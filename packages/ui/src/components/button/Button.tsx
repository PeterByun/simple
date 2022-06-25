import "./button.scss";
import { ComponentProps, ButtonHtmlProps } from "../../types/component-types";
import {
  mergeClassNames,
  createClassNamesFromStyleProps,
} from "../../utils/component-utils";
import { useCallback } from "react";

interface ButtonProps extends ComponentProps<ButtonHtmlProps> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  let {
    onClick,
    children,
    disabled,
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

  const handleClick = useCallback(
    (event) => {
      onClick(event);
    },
    [onClick]
  );

  return (
    <button
      className={classNames}
      {...elementProps}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
