import { Section } from "../../../components/layout/Section";
import { siteContent } from "../../../lib/constants/site";

export function AboutSection() {
  return (
    <Section
      id="nosotros"
      title="Nuestra Misión"
      subtitle="Capacitación integral para maestros del competitivo Pokémon."
    >
      <p>{siteContent.mission}</p>
    </Section>
  );
}
