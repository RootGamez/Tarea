import { HeroSection } from "./features/landing/sections/HeroSection";
import { AboutSection } from "./features/landing/sections/AboutSection";
import { ProgramsSection } from "./features/landing/sections/ProgramsSection";
import { CTASection } from "./features/landing/sections/CTASection";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="site-main">
        <HeroSection />
        <ProgramsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
