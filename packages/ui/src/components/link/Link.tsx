import { LinkHTMLAttributes } from "react";
import "./link.scss";

interface LinkProps {
  children?: React.ReactNode;
  openNewTab?: boolean;
  restProps?: LinkHTMLAttributes<HTMLAnchorElement>;
}

export const Link = (props: LinkProps) => {
  const { children, openNewTab, restProps } = props;

  let target = "_self";
  let rel = restProps.rel;

  if (openNewTab) {
    target = "_blank";
    rel += "noopener noreferrer";
  }

  return (
    <a target={target} {...restProps} rel={rel}>
      {children}
    </a>
  );
};
