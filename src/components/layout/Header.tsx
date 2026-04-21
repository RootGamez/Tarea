import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteContent } from "../../lib/constants/site";

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

  return (
    <header className="site-header" aria-label="Barra principal">
      <Container>
        <div className="site-header__inner">
          <a
            href="/"
            className="brand"
            aria-label="Ir al inicio"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/");
            }}
          >
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
            <Button
              href="/#contacto"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/#contacto");
              }}
            >
              Admisiones
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
