import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { lazy, Suspense } from "react";

import contentJson from "./data/laboratoryum-content.json";
import type { LaboratoryumContent } from "./types/content";
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ExperimentDetailPage = lazy(() => import("./pages/ExperimentDetailPage").then(m => ({ default: m.ExperimentDetailPage })));
import "./styles/tokens.css";
import "./styles/app.css";

const content = contentJson as LaboratoryumContent;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="lab-container">Cargando laboratorio...</div>}>
            <HomePage content={content} />
          </Suspense>
        ),
      },
      {
        path: "experimentos/:slug",
        element: (
          <Suspense fallback={<div className="lab-container">Cargando experimento...</div>}>
            <ExperimentDetailPage content={content} />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
