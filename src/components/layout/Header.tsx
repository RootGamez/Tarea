import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteContent } from "../../lib/constants/site";

const navItems = [
  { label: "Presentacion", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "mailto:admision@institucion.edu" }
] as const;

export function Header() {
  return (
    <header className="site-header" aria-label="Barra principal">
      <Container>
        <div className="site-header__inner">
          <a href="/" className="brand" aria-label="Ir al inicio">
            <img src="/johto-icon.svg" alt="Johto School" className="brand__icon" />
            <span className="brand__text">{siteContent.institutionName}</span>
          </a>

          <nav aria-label="Navegacion principal" className="site-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
            <Button href="mailto:admision@institucion.edu">Admisiones</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
