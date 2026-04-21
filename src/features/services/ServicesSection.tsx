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
  accent: string;
  note: string;
  imageUrl: string;
  imageAlt: string;
};

const servicesMedia: ServiceMedia[] = [
  {
    label: "Fundamentos",
    accent: "#ffcb05",
    note: "Ideal para construir una base solida desde el primer dia.",
    imageUrl: fundamentosImage,
    imageAlt: "Ilustracion de fundamentos competitivos",
  },
  {
    label: "Tacticas",
    accent: "#66e0ff",
    note: "Pensado para mejorar decisiones en escenarios de alto nivel.",
    imageUrl: tacticasImage,
    imageAlt: "Ilustracion de tacticas avanzadas",
  },
  {
    label: "Team Build",
    accent: "#9cf36b",
    note: "Enfocado en equipos equilibrados y con identidad propia.",
    imageUrl: equiposImage,
    imageAlt: "Ilustracion de construccion de equipos",
  },
  {
    label: "Analisis",
    accent: "#ff9f5a",
    note: "Para aprender a detectar patrones y corregir errores clave.",
    imageUrl: analisisImage,
    imageAlt: "Ilustracion de analisis de partidas",
  },
  {
    label: "Torneos",
    accent: "#c59bff",
    note: "Simula presion real y mejora tu rendimiento competitivo.",
    imageUrl: torneosImage,
    imageAlt: "Ilustracion de simulacion de torneos",
  },
  {
    label: "Mindset",
    accent: "#ff6f91",
    note: "Desarrolla enfoque, control emocional y constancia.",
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
            <Card
              key={index}
              className="services-page__card"
              style={{
                ["--service-accent" as string]: servicesMedia[index % servicesMedia.length].accent,
              }}
            >
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
              <Card.Content className="services-page__card-content">
                <div className="services-page__card-kicker">
                  <span>{servicesMedia[index % servicesMedia.length].label}</span>
                  <span className="services-page__card-step">0{index + 1}</span>
                </div>
                <h3 className="services-page__card-title">{service.title}</h3>
                <p className="services-page__description">{service.description}</p>
                <ul className="services-page__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <p className="services-page__footer-note">{servicesMedia[index % servicesMedia.length].note}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}