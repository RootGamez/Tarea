import { Container } from "./Container";
import { siteContent } from "../../lib/constants/site";

const quickLinks = [
  { label: "Presentacion", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "mailto:admision@institucion.edu" }
] as const;

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Pie de pagina">
      <Container>
        <div className="site-footer__grid">
          <section>
            <h3>{siteContent.institutionName}</h3>
            <p>{siteContent.tagline}</p>
          </section>

          <section>
            <h3>Explora</h3>
            <ul className="site-footer__links">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Contacto</h3>
            <p>{siteContent.contact.phone}</p>
            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          </section>
        </div>
        <p className="site-footer__copy">© 2026 {siteContent.institutionName}. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
