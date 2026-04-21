import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  as?: "div" | "section";
}>;

export function Container({ as = "div", children }: ContainerProps) {
  const Component = as;
  return <Component className="container">{children}</Component>;
}
