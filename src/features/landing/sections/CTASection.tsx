import { Section } from "../../../components/layout/Section";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function CTASection() {
  return (
    <Section
      id="contacto"
      title="Únete a JHOTO SCHOOL"
      subtitle="Comienza tu camino hacia la maestría en el competitivo Pokémon."
    >
      <p>
        Contacto: {siteContent.contact.phone} | {siteContent.contact.email}
      </p>
      <Button href="mailto:admision@jhotoschool.edu">Escribir a admisión</Button>
    </Section>
  );
}
