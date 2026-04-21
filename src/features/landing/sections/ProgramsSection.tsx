import { Section } from "../../../components/layout/Section";
import { siteContent } from "../../../lib/constants/site";

export function ProgramsSection() {
  return (
    <Section
      id="programas"
      title="Niveles de Entrenamiento"
      subtitle="Trayectorias para dominar el competitivo de Pokémon."
    >
      <ul className="program-list" aria-label="Listado de niveles">
        {siteContent.programs.map((program) => (
          <li key={program}>{program}</li>
        ))}
      </ul>
    </Section>
  );
}
