import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { GlitchLogo } from "./components/GlitchLogo";
import { useEffect } from "react";
import contentJson from "./data/laboratoryum-content.json";
import type { LaboratoryumContent } from "./types/content";

const content = contentJson as LaboratoryumContent;

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>

      <aside className="site-sidebar lab-container" aria-label="Navegación lateral">
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

        <section className="sidebar-stats">
          <h2 className="sidebar-section-title">ESTADÍSTICAS</h2>
          <p className="lab-meta">{content.stats.totalExperiments} LABS ACTIVOS</p>
          <p className="lab-meta">{content.experiments.filter(e => e.featured).length} DESTACADOS</p>
        </section>

        <div id="sidebar-filters-target">
          {/* Slot for filters if needed on homepage */}
        </div>
      </aside>

      <main id="main-content" className="site-main">
        <Outlet />

        <footer id="footer" className="site-footer lab-container">
          <p className="lab-meta">Laboratoryum · 2026</p>
        </footer>
      </main>

      <ScrollRestoration />
    </>
  );
}
