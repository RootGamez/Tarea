import { Container } from "./Container";
import { Button } from "../ui/Button";

const navItems = [
  { label: "Presentacion", href: "#presentacion" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" }
] as const;

export function Header() {
  return (
    <header className="site-header" aria-label="Barra principal">
      <Container>
        <div className="site-header__inner">
          <a href="#presentacion" className="brand" aria-label="Ir al inicio">
            <span className="brand__mark">IE</span>
            <span className="brand__text">Institucion Educativa</span>
          </a>

          <nav aria-label="Navegacion principal" className="site-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
            <Button href="#contacto">Admisiones</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
