import { memo } from "react";
import ButtonNext from "src/components/atoms/buttonNext";
import HomeList from "src/components/molecules/homeList";
import HomeGreeting from "src/components/molecules/homeGreeting";
import Layout from "src/components/templates/layout";
import HomeHero from "src/components/atoms/homeHero";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="mt-14 flex flex-col md:mt-20 md:flex-row">
        <div className="relative flex w-full flex-col">
          <HomeGreeting />
          <ButtonNext />
          <HomeList />
        </div>
        <HomeHero />
      </div>
    </Layout>
  );
};

export default memo(Home);
