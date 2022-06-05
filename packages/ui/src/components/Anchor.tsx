import React, { LinkHTMLAttributes } from "react";

type AnchorProps = {
  children?: React.ReactNode;
  openNewTab?: boolean;
  cursor?: string;
  restProps?: LinkHTMLAttributes<HTMLAnchorElement>;
};

export const Anchor = (props: AnchorProps) => {
  const { children, openNewTab, cursor, restProps } = props;

  const target = openNewTab ? "_blank" : "_self";

  return (
    <a
      style={{
        color: "var(--blue)",
        cursor: `${cursor ?? "pointer"}`,
        transition: "color 0.15s ease-in",
      }}
      target={target}
      {...restProps}
    >
      {children}
    </a>
  );
};
