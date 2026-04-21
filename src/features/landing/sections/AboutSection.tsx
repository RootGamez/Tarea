import { Section } from "../../../components/layout/Section";
import { siteContent } from "../../../lib/constants/site";

export function AboutSection() {
  return (
    <Section
      id="nosotros"
      title="Nuestra propuesta educativa"
      subtitle="Un enfoque academico, humano y tecnologico."
    >
      <p>{siteContent.mission}</p>
    </Section>
  );
}
