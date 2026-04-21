import { Card } from "@heroui/react";
import { Container } from "../../components/layout/Container";
import { siteContent } from "../../lib/constants/site";
import fundamentosImage from "./images/fundamentos.svg";
import tacticasImage from "./images/tacticas.svg";
import equiposImage from "./images/equipos.svg";
import analisisImage from "./images/analisis.svg";
import torneosImage from "./images/torneos.svg";
import mindsetImage from "./images/mindset.svg";

type ServiceMedia = {
  label: string;
  imageUrl: string;
  imageAlt: string;
};

const servicesMedia: ServiceMedia[] = [
  {
    label: "Fundamentos",
    imageUrl: fundamentosImage,
    imageAlt: "Ilustracion de fundamentos competitivos",
  },
  {
    label: "Tacticas",
    imageUrl: tacticasImage,
    imageAlt: "Ilustracion de tacticas avanzadas",
  },
  {
    label: "Team Build",
    imageUrl: equiposImage,
    imageAlt: "Ilustracion de construccion de equipos",
  },
  {
    label: "Analisis",
    imageUrl: analisisImage,
    imageAlt: "Ilustracion de analisis de partidas",
  },
  {
    label: "Torneos",
    imageUrl: torneosImage,
    imageAlt: "Ilustracion de simulacion de torneos",
  },
  {
    label: "Mindset",
    imageUrl: mindsetImage,
    imageAlt: "Ilustracion de habilidades blandas y mindset",
  },
];

export function ServicesSection() {
  return (
    <section className="services-page" aria-labelledby="services-page-title">
      <Container>
        <header className="services-page__header">
          <h2 id="services-page-title" className="pokemon-heading services-page__heading">
            Nuestros Programas de Capacitacion
          </h2>
          <p className="services-page__subtitle">
            Descubre como mejorar tus habilidades en el competitivo de Pokemon y convertirte en un entrenador legendario.
          </p>
        </header>

        <div className="services-page__grid">
          {siteContent.services.map((service, index) => (
            <Card key={index} className="services-page__card">
              <div className="services-page__media">
                <img
                  src={servicesMedia[index % servicesMedia.length].imageUrl}
                  alt={servicesMedia[index % servicesMedia.length].imageAlt}
                  loading="lazy"
                  className="services-page__image"
                />
                <span className="services-page__tag">
                  {servicesMedia[index % servicesMedia.length].label}
                </span>
              </div>
              <Card.Header>
                <h3 className="services-page__card-title">{service.title}</h3>
              </Card.Header>
              <Card.Content>
                <p className="services-page__description">{service.description}</p>
                <ul className="services-page__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}