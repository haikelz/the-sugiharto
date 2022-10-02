import { LazyMotion, m, domAnimation } from "framer-motion";
import Image from "next/image";

const HomeGreeting = () => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -ml-24 -mt-10 flex"
        >
          <Image
            src="/particles.svg"
            width="500px"
            height="500px"
            alt="profile"
          />
        </m.div>
        <m.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-4xl">Hi, nama saya</h1>
          <h1 className="mt-2 text-4xl font-bold">Dedik Sugiharto!</h1>
          <p className="mt-4 opacity-[60%] md:max-w-[60%]">
            Saya seorang software-engineer, pembaca buku, warga NU, dan juga
            murid (online) Pak Fahruddin Faiz.
          </p>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default HomeGreeting;
