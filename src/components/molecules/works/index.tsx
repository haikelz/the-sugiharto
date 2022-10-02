import { m } from "framer-motion";
import { listOverviewPekerjaan } from "src/utils/data";

const Works = () => {
  return (
    <m.div
      transition={{ duration: 0.5, delay: 2 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="mt-6 mb-2 text-2xl font-bold">Pekerjaan</h1>
      <ul>
        {listOverviewPekerjaan.map((work, index) => (
          <div
            className="mb-3 flex items-center md:mb-0 md:leading-[35px]"
            key={index + 1}
          >
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white p-1"></div>
            </div>
            <p className="font-semibold">{work.experience}</p>
          </div>
        ))}
      </ul>
    </m.div>
  );
};

export default Works;
