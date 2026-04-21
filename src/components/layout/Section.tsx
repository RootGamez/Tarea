import type { PropsWithChildren } from "react";
import { Container } from "./Container";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Container>
        <header className="section__header">
          <h2 id={`${id}-title`}>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
