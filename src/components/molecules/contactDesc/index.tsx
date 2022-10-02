import { m, domAnimation, LazyMotion } from "framer-motion";
import Email from "src/components/atoms/email";
import Phone from "src/components/atoms/phone";

const ContactDesc = () => {
  return (
    <div className="md:max-w-[30%]">
      <LazyMotion features={domAnimation}>
        <m.div
          className="relative flex items-center"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="absolute -ml-6 text-6xl font-extrabold opacity-5 md:-ml-10 md:text-7xl">
            Contact
          </h1>
          <h1 className="text-3xl font-bold">Contact</h1>
        </m.div>
        <m.p
          className="mt-8 mb-6 opacity-60"
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
        </m.p>
        <m.div
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Phone />
          <Email />
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default ContactDesc;
