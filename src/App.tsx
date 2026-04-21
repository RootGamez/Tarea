import { useEffect, useState } from "react";
import { LandingView } from "./features/landing/LandingView";
import { ServicesView } from "./features/services/ServicesView";
import { NosotrosPage } from "./features/nosotros/NosotrosPage";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function HomePage() {
  return (
    <>
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
    return (
      <NosotrosPage
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
}

export default App;
