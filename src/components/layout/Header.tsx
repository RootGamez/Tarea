import { Container } from "./Container";
import { Button } from "../ui/Button";
import { siteContent } from "../../lib/constants/site";

const WHATSAPP_ADMISSIONS_URL =
  "https://wa.me/51977872875?text=Hola%20Johto%20School%2C%20quiero%20informacion%20de%20admisiones";

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
    { label: "Contacto", href: "/contacto", matchPathname: "/contacto" }
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
              href={WHATSAPP_ADMISSIONS_URL}
              target="_blank"
              rel="noreferrer"
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
