import { LazyMotion, m, domAnimation } from "framer-motion";
import Image from "next/image";

const HomeHero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.7, delay: 1 }}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-10 md:mt-0"
      >
        <Image width="1000px" height="800px" src="/hero.png" alt="Hero" />
      </m.div>
    </LazyMotion>
  );
};

export default HomeHero;
