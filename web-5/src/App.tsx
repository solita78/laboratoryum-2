import { useEffect, useState } from "react";
import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { href: "/#experimentos", label: "Experimentos" },
  { href: "/#archivo", label: "Archivo" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/#footer", label: "Contacto" },
];

export default function App() {
  const { pathname, hash } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!hash) {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
      return;
    }

    const element = document.getElementById(hash.slice(1));
    if (!element) return;

    const timer = window.setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [hash, pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>

      <header className="site-shell">
        <div className="site-header lab-shell" aria-label="Encabezado principal">
          <Link to="/" className="site-brand" aria-label="Laboratoryum, ir al inicio">
            <span className="site-brand-mark">L</span>
            <span className="site-brand-copy">
              <span className="site-brand-name">Laboratoryum</span>
              <span className="site-brand-tag">Laboratorio independiente de experimentación web</span>
            </span>
          </Link>

          <button
            type="button"
            className="site-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Abrir navegación</span>
          </button>

          <nav
            aria-label="Menu principal"
            id="site-menu"
            className={`site-nav${isMenuOpen ? " is-open" : ""}`}
          >
            <ul className="site-menu">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer id="footer" className="site-footer">
        <div className="lab-shell site-footer-inner">
          <div>
            <p className="footer-kicker">Laboratoryum</p>
            <p className="footer-copy">
              Pruebas, comparaciones y métodos reutilizables para una web que ahora
              circula entre personas, plataformas y agentes.
            </p>
          </div>

          <div className="footer-links" aria-label="Navegacion de pie de pagina">
            <Link to="/#experimentos">Experimentos</Link>
            <Link to="/#archivo">Archivo</Link>
            <Link to="/#metodo">Metodo</Link>
          </div>
        </div>
      </footer>

      <ScrollRestoration />
    </>
  );
}
