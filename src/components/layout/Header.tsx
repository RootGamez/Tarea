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
  isExternal?: boolean;
  matchPathname?: string;
};

function getNavItems(): NavItem[] {
  return [
    { label: "Presentacion", href: "/", matchPathname: "/" },
    { label: "Nosotros", href: "/nosotros", matchPathname: "/nosotros" },
    { label: "Servicios", href: "/servicios", matchPathname: "/servicios" },
    { label: "Contacto", href: "mailto:admision@institucion.edu", isExternal: true }
  ];
}

export function Header({ pathname, onNavigate }: HeaderProps) {
  const navItems = getNavItems();

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
                  if (item.isExternal) {
                    return;
                  }

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
              href="mailto:admision@institucion.edu"
              onClick={(event) => {
                event.stopPropagation();
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
