import { LinkHTMLAttributes } from "react";
import "./link.scss";

interface LinkProps {
  href: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
  openNewTab?: boolean;
  restProps?: LinkHTMLAttributes<HTMLAnchorElement>;
}

export const Link = (props: LinkProps) => {
  let { href, rel, children, className, openNewTab, restProps } = props;

  let target = "_self";

  if (openNewTab) {
    target = "_blank";
    if (rel) rel += "noopener noreferrer";
  }

  let classNames = "sp-link";
  if (className) classNames += ` ${className}`;

  return (
    <a
      href={href}
      rel={rel}
      className={classNames}
      target={target}
      {...restProps}
    >
      {children}
    </a>
  );
};
