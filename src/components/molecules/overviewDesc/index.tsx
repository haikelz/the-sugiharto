import { m } from "framer-motion";
import Image from "next/image";

const OverviewDesc = () => {
  return (
    <>
      <m.div
        className="relative flex items-center"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="-ml-6 text-6xl font-extrabold opacity-[3%] tablet:-ml-10 tablet:text-7xl">
          Overview
        </h1>
        <h1 className="absolute text-3xl font-bold">Overview</h1>
      </m.div>
      <m.div
        className="flex flex-col items-start tablet:hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/sugiharto.png"
          width="200px"
          height="250px"
          alt="sugiharto"
        />
        <span className="mt-2 opacity-60">Foto diambil 2018</span>
      </m.div>
      <m.p
        className="my-6 pr-4 opacity-60"
        transition={{ duration: 0.5, delay: 1 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum kata
        software-engineer itu ada. Saya terbiasa ngoding di Microsoft Word 2003.
      </m.p>
    </>
  );
};

export default OverviewDesc;
