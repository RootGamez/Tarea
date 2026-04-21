import { useEffect, useState } from "react";
import { LandingView } from "./features/landing/LandingView";
import { ServicesView } from "./features/services/ServicesView";
import { NosotrosPage } from "./features/nosotros/NosotrosPage";
import { ContactoView } from "./features/contacto/ContactoView";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

type HomePageProps = {
  pathname: string;
  onNavigate: (target: string) => void;
};

function HomePage({ pathname, onNavigate }: HomePageProps) {
  return (
    <>
      <Header pathname={pathname} onNavigate={onNavigate} />
      <LandingView />
      <Footer pathname={pathname} onNavigate={onNavigate} />
    </>
  );
}

function ServicesPage({ pathname, onNavigate }: HomePageProps) {
  return (
    <>
      <Header pathname={pathname} onNavigate={onNavigate} />
      <ServicesView />
      <Footer pathname={pathname} onNavigate={onNavigate} />
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
      <NosotrosPage pathname={pathname} onNavigate={navigate} />
    );
  }

  if (pathname === "/servicios") {
    return <ServicesPage pathname={pathname} onNavigate={navigate} />;
  }

  if (pathname === "/contacto") {
    return (
      <>
        <Header pathname={pathname} onNavigate={navigate} />
        <ContactoView />
        <Footer pathname={pathname} onNavigate={navigate} />
      </>
    );
  }

  return <HomePage pathname={pathname} onNavigate={navigate} />;
}

export default App;
