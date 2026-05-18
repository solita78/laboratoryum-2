import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GlitchLogo } from "./GlitchLogo";

type LayoutProps = {
  children: ReactNode;
  sidebarContent?: ReactNode;
};

export function Layout({ children, sidebarContent }: LayoutProps) {
  return (
    <div className="lab-layout">
      <aside className="lab-sidebar">
        <header className="sidebar-header">
          <Link to="/" className="site-brand" aria-label="Laboratoryum, ir al inicio">
            <GlitchLogo />
          </Link>
        </header>

        <nav className="sidebar-nav" aria-label="Menú principal">
          <ul className="site-menu">
            <li><Link to="/#experimentos">Experimentos</Link></li>
            <li><Link to="/#recursos">Recursos</Link></li>
            <li><Link to="/#archivo">Archivo</Link></li>
            <li><Link to="/#footer">Contacto</Link></li>
          </ul>
        </nav>

        <div className="sidebar-extra">
          {sidebarContent}
        </div>

        <footer className="sidebar-footer">
          <p>© LABORATORYUM</p>
          <p className="terminal-date">{new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase()}</p>
        </footer>
      </aside>

      <main id="main-content" tabIndex={-1} className="lab-main">
        {children}
      </main>
    </div>
  );
}
