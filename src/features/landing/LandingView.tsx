import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ServicesSection } from './sections/ServicesSection';
import { CTASection } from './sections/CTASection';

export function LandingView() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}