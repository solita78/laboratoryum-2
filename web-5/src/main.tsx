import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { laboratoryumContent } from "./data/laboratoryum-content";
import "./styles/tokens.css";
import "./styles/app.css";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const ExperimentDetailPage = lazy(() =>
  import("./pages/ExperimentDetailPage").then((module) => ({
    default: module.ExperimentDetailPage,
  })),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="lab-shell route-loading">Cargando laboratorio...</div>}>
            <HomePage content={laboratoryumContent} />
          </Suspense>
        ),
      },
      {
        path: "experimentos/:slug",
        element: (
          <Suspense fallback={<div className="lab-shell route-loading">Cargando experimento...</div>}>
            <ExperimentDetailPage content={laboratoryumContent} />
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
