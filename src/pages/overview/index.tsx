import { memo } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import Layout from "src/components/templates/layout";
import OverviewDesc from "src/components/molecules/overviewDesc";
import SugihartoOverview from "src/components/atoms/sugihartoOverview";
import Education from "src/components/molecules/education";
import Works from "src/components/molecules/works";

const Overview = () => {
  return (
    <Layout title="Overview">
      <div className="mt-14 flex justify-center tablet:max-w-[90%] tablet:justify-between tablet:text-justify">
        <LazyMotion features={domAnimation}>
          <div className="tablet:max-w-[50%]">
            <OverviewDesc />
            <Education />
            <Works />
          </div>
        </LazyMotion>
        <SugihartoOverview />
      </div>
    </Layout>
  );
};

export default memo(Overview);
