import { m } from "framer-motion";
import { listOverviewPendidikan } from "src/utils/data";

const Education = () => {
  return (
    <m.div
      transition={{ duration: 0.5, delay: 1.5 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="mb-2 text-2xl font-bold">Pendidikan</h1>
      <ul>
        {listOverviewPendidikan.map((edu, index) => (
          <div className="flex items-center leading-[35px]" key={index + 1}>
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white p-1"></div>
            </div>
            <p className="font-semibold">{edu.edu}</p>
          </div>
        ))}
      </ul>
    </m.div>
  );
};

export default Education;
