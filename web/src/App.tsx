import { Navigate, Route, Routes } from "react-router-dom";
import contentJson from "./data/laboratoryum-content.json";
import { HomePage } from "./pages/HomePage";
import { ExperimentDetailPage } from "./pages/ExperimentDetailPage";
import type { LaboratoryumContent } from "./types/content";

const content = contentJson as LaboratoryumContent;

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <Routes>
      <Route path="/" element={<HomePage content={content} />} />
      <Route path="/experimentos/:slug" element={<ExperimentDetailPage content={content} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
