import { useEffect, useState } from "react";
import { HeroSection } from "./features/landing/sections/HeroSection";
import { AboutSection } from "./features/landing/sections/AboutSection";
import { ProgramsSection } from "./features/landing/sections/ProgramsSection";
import { CTASection } from "./features/landing/sections/CTASection";
import { NosotrosPage } from "./features/nosotros/NosotrosPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function HomePage() {
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

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (pathname === "/nosotros") {
    return <NosotrosPage onGoHome={() => {
      window.history.pushState({}, "", "/");
      setPathname("/");
    }} />;
  }

  return (
    <HomePage />
  );
}

export default App;
