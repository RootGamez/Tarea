import { Card } from "@heroui/react";
import { Section } from "../../../components/layout/Section";
import { siteContent } from "../../../lib/constants/site";

export function ServicesSection() {
  return (
    <Section
      id="servicios"
      title="Nuestros Programas de Capacitación"
      subtitle="Descubre cómo mejorar tus habilidades en el competitivo de Pokémon y convertirte en un entrenador legendario."
    >
      <div className="services-grid">
        {siteContent.services.map((service, index) => (
          <Card key={index} className="service-card">
            <Card.Header>
              <h3 className="service-title">{service.title}</h3>
            </Card.Header>
            <Card.Content>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
}
