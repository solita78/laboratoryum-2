import rawContent from "./laboratoryum-content.json";
import type { LaboratoryumContent } from "../types/content";

const baseContent = rawContent as Omit<
  LaboratoryumContent,
  "manifesto" | "method" | "archive"
>;

export const laboratoryumContent: LaboratoryumContent = {
  ...baseContent,
  manifesto: {
    heroTitle: "Experimentos para una web que ya no circula intacta.",
    heroLead:
      "Laboratoryum es un laboratorio independiente sobre futuros de la web: investigación aplicada sobre contexto, evidencia, accesibilidad, memoria y agentes.",
    heroBody:
      "No publicamos opinión aislada. Publicamos pruebas, comparaciones y métodos reutilizables para entender qué ocurre cuando el contenido pasa por resúmenes, capturas, traducciones, automatizaciones y sistemas de IA.",
    proofPoints: [
      "Cada LAB parte de un problema real de circulación digital.",
      "Cada resultado deja un protocolo verificable y un kit derivado.",
      "Cada página se diseña para lectura humana, archivo y acceso maquínico.",
    ],
  },
  method: {
    centralQuestion:
      "¿Cómo será una web que ya no se diseña solo para pantallas, sino también para agentes, asistentes, lectores, traducciones, automatizaciones y formas de acceso que todavía están apareciendo?",
    steps: [
      {
        number: "01",
        title: "Elegimos una fricción real",
        description:
          "Cada experimento parte de un problema concreto: pérdida de contexto, opacidad de fuentes, envejecimiento del contenido o ruptura del archivo.",
      },
      {
        number: "02",
        title: "Sometemos el contenido a contraste",
        description:
          "Comparamos versiones, plataformas, accesos y mediaciones para ver dónde se conserva el sentido y dónde se distorsiona.",
      },
      {
        number: "03",
        title: "Publicamos evidencia reutilizable",
        description:
          "El cierre no es una opinión. Es una ficha, un protocolo, una matriz comparativa y un kit transferible a otros proyectos.",
      },
    ],
  },
  archive: {
    title: "Archivo vivo de 25 experimentos",
    description:
      "La temporada se organiza entre una base metodológica y una serie aplicada por formatos. El archivo está pensado para exploración rápida, lectura profunda y consulta futura.",
    notes: [
      "Serie metodológica: LAB-001 a LAB-010.",
      "Serie aplicada por formatos: LAB-011 a LAB-025.",
      "Estados editoriales visibles para distinguir publicado, en curso y borrador.",
    ],
  },
};
