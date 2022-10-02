import { m, domAnimation, LazyMotion } from "framer-motion";
import { listSkills } from "src/utils/data";
import Image from "next/image";

const SkillsCard = () => {
  return (
    <LazyMotion features={domAnimation}>
      {listSkills.map((skill: any, index: number) => (
        <m.div
          className="mb-10 flex w-full flex-col flex-wrap items-center text-center"
          key={index + 1}
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image src={skill.img} width="400px" height="400px" alt="skill" />
          <div className="tablet:px-3.5">
            <h1 className="text-lg font-semibold">{skill.skill}</h1>
            <div className="flex items-center justify-center tablet:block">
              <p className="opacity-60 sm:max-w-full md:max-w-[65%] tablet:max-w-full">
                {skill.ket}
              </p>
            </div>
          </div>
        </m.div>
      ))}
    </LazyMotion>
  );
};

export default SkillsCard;
