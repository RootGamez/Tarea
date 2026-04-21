import { ServicesSection } from './ServicesSection';
import { ServicesHero } from './ServicesHero';
import './services-font.css';
import './services-style.css';

export function ServicesView() {
  return (
    <main className="services-view">
      <ServicesHero />
      <ServicesSection />
    </main>
  );
}