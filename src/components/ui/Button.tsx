import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  const className = `button button--${variant}`;

  if ("href" in props && props.href) {
    return (
      <a {...props} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...props} className={className}>
      {children}
    </button>
  );
}
