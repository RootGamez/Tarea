import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  const className = `button button--${variant}`;

  if (typeof props.href === "string") {
    const anchorProps = props as ButtonAsLink;

    return (
      <a {...anchorProps} className={className}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button {...buttonProps} type={buttonProps.type ?? "button"} className={className}>
      {children}
    </button>
  );
}
