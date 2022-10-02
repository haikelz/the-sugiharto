import { m, domAnimation, LazyMotion } from "framer-motion";

const SkillsDesc = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="relative flex items-center"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="absolute -ml-6 text-6xl font-extrabold opacity-5 tablet:-ml-10 tablet:text-7xl">
          Skills
        </h1>
        <h1 className="text-3xl font-bold">Skills</h1>
      </m.div>
      <m.p
        className="mt-8 mb-6 pr-3 opacity-60"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi males
        masukin.
      </m.p>
    </LazyMotion>
  );
};

export default SkillsDesc;
