import { Container } from "../../components/layout/Container";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { Section } from "../../components/layout/Section";
import { Button } from "../../components/ui/Button";
import { siteContent } from "../../lib/constants/site";

const educationalPillars = [
  "Entrenamiento por niveles: principiante, intermedio y competitivo",
  "Lectura de meta, tipos, coberturas y toma de decisiones tácticas",
  "Talleres de armado de equipos y simulación de combates",
  "Mentoría personalizada para mejorar reflejos, estrategia y consistencia"
];

const champions = [
  {
    name: "Alonso Barrueta",
    title: "Campeón regional - Formato individual",
    image: "/hombre.png"
  },
  {
    name: "Maya Rios",
    title: "Top clasificatorio nacional - Liga academica",
    image: "/mujer.png"
  }
];

type NosotrosPageProps = {
  pathname: string;
  onNavigate: (target: string) => void;
};

export function NosotrosPage({ pathname, onNavigate }: NosotrosPageProps) {
  return (
    <>
      <Header pathname={pathname} onNavigate={onNavigate} />

      <main className="site-main">
        <section id="nosotros" className="hero nosotros-hero" aria-labelledby="nosotros-title">
          <Container>
            <figure className="nosotros-hero__media" aria-hidden="true">
              <img src="/johtosch.png" alt="" loading="lazy" />
            </figure>

            <div className="nosotros-hero__content">
              <p className="hero__eyebrow">Conoce Johto School</p>
              <h1 id="nosotros-title">Nosotros</h1>
              <p className="hero__tagline nosotros-hero__mission">{siteContent.mission}</p>
              <div className="hero__actions">
                <Button
                  href="/#contacto"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate("/#contacto");
                  }}
                >
                  Hablar con admisiones
                </Button>
                <Button
                  href="/#servicios"
                  variant="secondary"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate("/#servicios");
                  }}
                >
                  Ver servicios
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <Section
          id="enfoque"
          title="Nuestro enfoque"
          subtitle="Formación práctica para jugar Pokemon con estrategia, análisis y juego limpio."
        >
          <ul className="nosotros-pillars" aria-label="Pilares de nuestra propuesta educativa">
            {educationalPillars.map((pillar, index) => (
              <li key={pillar}>
                <span className="nosotros-pillars__index">0{index + 1}</span>
                <p>{pillar}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="equipo"
          title="Comunidad de entrenadores"
          subtitle="Acompañamos a cada estudiante en su progreso dentro del juego, desde cero hasta torneos."
        >
          <div className="nosotros-info-grid" aria-label="Informacion institucional">
            <article className="nosotros-info-card">
              <h3>Como ensenamos</h3>
              <p>
                Nuestro equipo combina clases guiadas, practica en batallas, revision de errores y
                planes de mejora para que cada persona aprenda a competir con criterio y confianza.
              </p>
            </article>
            <article className="nosotros-info-card">
              <h3>Contacto directo</h3>
              <p>
                Telefono: {siteContent.contact.phone}
                <br />
                Correo: {siteContent.contact.email}
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="egresados"
          title="Egresados"
          subtitle="Conoce a algunos de nuestros campeones y campeonas destacados."
        >
          <div className="champions-grid" aria-label="Galeria de campeones egresados">
            {champions.map((champion) => (
              <article key={`${champion.name}-${champion.title}`} className="champion-card">
                <img src={champion.image} alt={champion.name} loading="lazy" />
                <div className="champion-card__body">
                  <h3>{champion.name}</h3>
                  <p>{champion.title}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <Footer pathname={pathname} onNavigate={onNavigate} />
    </>
  );
}