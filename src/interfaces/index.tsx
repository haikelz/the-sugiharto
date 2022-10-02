import { ReactNode } from "react";

export interface ReducerType {
  type: string;
}

export interface Kategori {
  kategori: string;
  dispatchKategori: (action: ReducerType) => void;
}

export interface Layout {
  children: ReactNode[] | JSX.Element;
  title?: string;
}
