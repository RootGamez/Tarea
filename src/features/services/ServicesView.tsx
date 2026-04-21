import { ServicesSection } from './ServicesSection';
import './services-font.css';
import './services-style.css';

export function ServicesView() {
  return (
    <main className="services-view">
      <h1 className="pokemon-title services-view__title">Zona de Entrenamiento</h1>
      <ServicesSection />
    </main>
  );
}