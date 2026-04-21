import { Section } from "../../../components/layout/Section";
import { Button } from "../../../components/ui/Button";
import { siteContent } from "../../../lib/constants/site";

export function CTASection() {
  return (
    <Section
      id="contacto"
      title="Agenda una visita guiada"
      subtitle="Conoce nuestras instalaciones y metodologia en persona."
    >
      <p>
        Contacto: {siteContent.contact.phone} | {siteContent.contact.email}
      </p>
      <Button href="mailto:admision@institucion.edu">Escribir a admision</Button>
    </Section>
  );
}
