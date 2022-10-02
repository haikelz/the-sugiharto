import { LazyMotion, m, domAnimation } from "framer-motion";
import Image from "next/image";

const SugihartoOverview = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 hidden flex-col items-center tablet:flex"
      >
        <Image
          src="/sugiharto.png"
          width="250px"
          height="350px"
          alt="sugiharto overview"
        />
        <span className="mt-2 opacity-60">Foto diambil 2018</span>
      </m.div>
    </LazyMotion>
  );
};

export default SugihartoOverview;
