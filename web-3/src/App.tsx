import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { GlitchLogo } from "./components/GlitchLogo";
import { useEffect } from "react";

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Use a small timeout to ensure the DOM is ready if navigating between routes
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else if (pathname === "/") {
      // If navigating to home without hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <header className="site-header lab-container" aria-label="Encabezado principal">
        <Link to="/" className="site-brand" aria-label="Laboratoryum, ir al inicio">
          <GlitchLogo />
        </Link>
        <nav aria-label="Menú principal">
          <ul className="site-menu">
            <li><Link to="/#experimentos">Experimentos</Link></li>
            <li><Link to="/#recursos">Recursos</Link></li>
            <li><Link to="/#archivo">Archivo</Link></li>
            <li><Link to="#footer">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer id="footer" className="site-footer lab-container">
        <p>Laboratoryum</p>
        <nav aria-label="Menú de pie de página">
          <ul className="site-footer-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/#experimentos">Experimentos</Link></li>
          </ul>
        </nav>
      </footer>
      <ScrollRestoration />
    </>
  );
}
