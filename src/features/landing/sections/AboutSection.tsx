import { Section } from "../../../components/layout/Section";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function AboutSection() {
  return (
    <Section
      id="nosotros"
      title="Nuestra propuesta educativa"
      subtitle="Un enfoque academico, humano y tecnologico."
    >
      <p>{siteContent.mission}</p>
      <div className="about__actions">
        <Button href="#programas" variant="secondary">
          Ver programas
        </Button>
      </div>
    </Section>
  );
}
