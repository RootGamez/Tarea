import { useState } from "react";
import { Button, Card } from "@heroui/react";
import "./nosotros.css";

const services = [
  "Acompanamiento academico por niveles",
  "Talleres creativos y trabajo colaborativo",
  "Actividades de tecnologia, lectura y pensamiento critico"
];

type NosotrosPageProps = {
  onGoHome: () => void;
};

export function NosotrosPage({ onGoHome }: NosotrosPageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="nosotros-page">
      <section className="nosotros-hero" aria-labelledby="nosotros-title">
        <div className="nosotros-shell">
          <p className="nosotros-eyebrow">Johto Schools</p>
          <h1 id="nosotros-title">Nosotros</h1>
          <p className="nosotros-copy">
            Johto Schools es una institucion educativa inspirada en Pokemon, enfocada en formar
            estudiantes curiosos, estrategicos y colaborativos.
          </p>

          <div className="nosotros-actions">
            <Button className="nosotros-toggle" onPress={() => setIsOpen((current) => !current)}>
              Nosotros
            </Button>
            <Button className="nosotros-back" onPress={onGoHome}>
              Volver al inicio
            </Button>
          </div>

          {isOpen ? (
            <div className="nosotros-grid">
              <Card className="nosotros-card">
                <Card.Header>
                  <Card.Title>Servicios que hacemos</Card.Title>
                  <Card.Description>
                    Impulsamos el aprendizaje con una propuesta practica, creativa y cercana.
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <ul className="nosotros-list">
                    {services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>

              <Card className="nosotros-card">
                <Card.Header>
                  <Card.Title>Contacto</Card.Title>
                  <Card.Description>
                    Escribenos por telefono o al correo de admision.
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <div className="nosotros-contact">
                    <p className="nosotros-contactItem">
                      <span>Numero:</span>
                      <strong>+00 000 000 000</strong>
                    </p>
                    <p className="nosotros-contactItem">
                      <span>Gmail:</span>
                      <strong>johto.schools@gmail.com</strong>
                    </p>
                  </div>
                </Card.Content>
              </Card>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}