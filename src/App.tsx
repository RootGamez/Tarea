import { HeroSection } from "./features/landing/sections/HeroSection";
import { AboutSection } from "./features/landing/sections/AboutSection";
import { ProgramsSection } from "./features/landing/sections/ProgramsSection";
import { CTASection } from "./features/landing/sections/CTASection";

function App() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CTASection />
    </main>
  );
}

export default App;
