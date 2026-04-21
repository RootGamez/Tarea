import { Section } from "../../../components/layout/Section";
import { siteContent } from "../../../lib/constants/site";

export function ProgramsSection() {
  return (
    <Section
      id="servicios"
      title="Programas academicos"
      subtitle="Trayectorias para cada etapa de aprendizaje."
    >
      <ul className="program-list" aria-label="Listado de programas">
        {siteContent.programs.map((program) => (
          <li key={program}>{program}</li>
        ))}
      </ul>
    </Section>
  );
}
