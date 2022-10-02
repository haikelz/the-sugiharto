import { m, domAnimation, LazyMotion } from "framer-motion";
import { useContext } from "react";
import { ProjectsContext } from "src/helpers/ProjectsContext";
import { projectsCategoriesList } from "src/utils/data";
import ProjectsDesc from "../projectsdesc";

const ProjectsKategori = () => {
  const { kategori, dispatchKategori } = useContext(ProjectsContext);

  return (
    <div className="tablet:max-w-[35%]">
      <LazyMotion features={domAnimation}>
        <ProjectsDesc />
        <m.ul
          className="leading-[35px]"
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {projectsCategoriesList.map((item, index) => (
            <div className="flex items-center" key={index + 1}>
              <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
                <div
                  className={`rounded-full ${
                    kategori === item.type ? "bg-white" : "bg-white/50"
                  } p-1`}
                ></div>
              </div>
              <p
                className={`cursor-pointer ${
                  kategori === item.type ? "font-semibold" : "opacity-60"
                }`}
                onClick={() => dispatchKategori({ type: item.type })}
              >
                {item.kategori}
              </p>
            </div>
          ))}
        </m.ul>
      </LazyMotion>
    </div>
  );
};

export default ProjectsKategori;
