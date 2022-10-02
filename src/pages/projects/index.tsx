import { memo } from "react";
import { atom } from "jotai";
import { useReducerAtom } from "jotai/utils";
import { ProjectsContext } from "src/helpers/ProjectsContext";
import { ReducerType } from "src/interfaces";
import Layout from "src/components/templates/layout";
import ProjectsKategori from "src/components/molecules/projectsKategori";
import ProjectsCard from "src/components/molecules/projectsCard";

const reducer = (prev: string, action: ReducerType) => {
  switch (action.type) {
    case "":
      return "";
      break;

    case "UI DESIGN":
      return "UI DESIGN";
      break;

    case "WEB DEVELOPMENT":
      return "WEB DEVELOPMENT";
      break;

    case "MOBILE DEVELOPMENT":
      return "MOBILE DEVELOPMENT";
      break;

    default:
      throw new Error("Unknown Action type");
  }
};

const kategoriAtom = atom<string>("");

const Projects = () => {
  const [kategori, dispatchKategori] = useReducerAtom(kategoriAtom, reducer);

  return (
    <Layout title="Projects">
      <div className="mt-14 flex flex-col items-start justify-start tablet:mt-20 tablet:flex-row tablet:justify-between">
        <ProjectsContext.Provider value={{ kategori, dispatchKategori }}>
          <ProjectsKategori />
          <ProjectsCard />
        </ProjectsContext.Provider>
      </div>
    </Layout>
  );
};

export default memo(Projects);
