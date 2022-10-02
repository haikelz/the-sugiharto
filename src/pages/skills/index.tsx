import { memo } from "react";
import Layout from "src/components/templates/layout";
import SkillsCard from "src/components/molecules/skillsCard";
import SkillsDesc from "src/components/molecules/skillsDesc";

const Skills = () => {
  return (
    <Layout title="Skills">
      <div className="mt-14 flex flex-col justify-between tablet:mt-20">
        <div className="tablet:max-w-[35%]">
          <SkillsDesc />
        </div>
        <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-2 md:gap-6 tablet:grid-cols-3">
          <SkillsCard />
        </div>
      </div>
    </Layout>
  );
};

export default memo(Skills);
