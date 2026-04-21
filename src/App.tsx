import { useEffect, useState } from "react";
<<<<<<< nosotros-v2
import { HeroSection } from "./features/landing/sections/HeroSection";
import { ProgramsSection } from "./features/landing/sections/ProgramsSection";
import { CTASection } from "./features/landing/sections/CTASection";
=======
import { LandingView } from "./features/landing/LandingView";
import { ServicesView } from "./features/services/ServicesView";
>>>>>>> main
import { NosotrosPage } from "./features/nosotros/NosotrosPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

type HomePageProps = {
  pathname: string;
  onNavigate: (target: string) => void;
};

function HomePage({ pathname, onNavigate }: HomePageProps) {
  return (
    <>
<<<<<<< nosotros-v2
      <Header pathname={pathname} onNavigate={onNavigate} />
      <main className="site-main">
        <HeroSection />
        <ProgramsSection />
        <CTASection />
      </main>
      <Footer pathname={pathname} onNavigate={onNavigate} />
=======
      <Header />
      <LandingView />
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesView />
      <Footer />
>>>>>>> main
    </>
  );
}

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  const navigate = (target: string) => {
    const nextUrl = new URL(target, window.location.origin);
    const nextPathname = nextUrl.pathname;

    if (
      window.location.pathname === nextPathname &&
      window.location.hash === nextUrl.hash
    ) {
      return;
    }

    window.history.pushState({}, "", `${nextPathname}${nextUrl.hash}`);
    setPathname(nextPathname);

    requestAnimationFrame(() => {
      if (nextUrl.hash) {
        const section = document.querySelector(nextUrl.hash);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

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
    return (
      <NosotrosPage
<<<<<<< nosotros-v2
        pathname={pathname}
        onNavigate={navigate}
      />
    );
  }

  return <HomePage pathname={pathname} onNavigate={navigate} />;
=======
        onGoHome={() => {
          window.history.pushState({}, "", "/");
          setPathname("/");
        }}
      />
    );
  }

  if (pathname === "/servicios") {
    return <ServicesPage />;
  }

  return <HomePage />;
>>>>>>> main
}

export default App;
