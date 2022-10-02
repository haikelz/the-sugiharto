import { m } from "framer-motion";

const ProjectsDesc = () => {
  return (
    <>
      <m.div
        className="relative flex items-center"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="absolute -ml-6 text-6xl font-extrabold opacity-5 tablet:-ml-10 tablet:text-7xl">
          Projects
        </h1>
        <h1 className="text-3xl font-bold">Projects</h1>
      </m.div>
      <m.p
        className="mt-8 mb-6 opacity-60"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.
      </m.p>
    </>
  );
};

export default ProjectsDesc;
