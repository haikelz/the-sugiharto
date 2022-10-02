import { createContext } from "react";
import { Kategori } from "src/interfaces";

export const ProjectsContext = createContext<Kategori | any>({});
