import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteContent } from "../../lib/constants/site";

<<<<<<< nosotros-v2
type HeaderProps = {
  pathname: string;
  onNavigate: (target: string) => void;
};

type NavItem = {
  label: string;
  href: string;
  matchPathname?: string;
};

function getNavItems(pathname: string): NavItem[] {
  if (pathname === "/nosotros") {
    return [
      { label: "Inicio", href: "/", matchPathname: "/" },
      { label: "Servicios", href: "/#servicios", matchPathname: "/" },
      { label: "Nosotros", href: "/nosotros", matchPathname: "/nosotros" },
      { label: "Contacto", href: "/#contacto", matchPathname: "/" }
    ];
  }

  return [
    { label: "Presentacion", href: "/#presentacion", matchPathname: "/" },
    { label: "Servicios", href: "/#servicios", matchPathname: "/" },
    { label: "Nosotros", href: "/nosotros", matchPathname: "/nosotros" },
    { label: "Contacto", href: "/#contacto", matchPathname: "/" }
  ];
}

export function Header({ pathname, onNavigate }: HeaderProps) {
  const navItems = getNavItems(pathname);

=======
const navItems = [
  { label: "Presentacion", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "mailto:admision@institucion.edu" }
] as const;

export function Header() {
>>>>>>> main
  return (
    <header className="site-header" aria-label="Barra principal">
      <Container>
        <div className="site-header__inner">
<<<<<<< nosotros-v2
          <a
            href="/"
            className="brand"
            aria-label="Ir al inicio"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/");
            }}
          >
=======
          <a href="/" className="brand" aria-label="Ir al inicio">
>>>>>>> main
            <img src="/johto-icon.svg" alt="Johto School" className="brand__icon" />
            <span className="brand__text">{siteContent.institutionName}</span>
          </a>

          <nav aria-label="Navegacion principal" className="site-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav__link"
                aria-current={item.matchPathname === pathname ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
<<<<<<< nosotros-v2
            <Button
              href="/#contacto"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/#contacto");
              }}
            >
              Admisiones
            </Button>
=======
            <Button href="mailto:admision@institucion.edu">Admisiones</Button>
>>>>>>> main
          </div>
        </div>
      </Container>
    </header>
  );
}
