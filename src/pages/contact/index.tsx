import { memo } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import SugihartoChat from "src/components/atoms/sugihartoChat";
import ContactDesc from "src/components/molecules/contactDesc";
import Layout from "src/components/templates/layout";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="mt-14 flex flex-col justify-between md:mt-20 md:flex-row">
        <ContactDesc />
        <div className="mt-10 flex flex-col justify-center">
          <LazyMotion features={domAnimation}>
            <SugihartoChat />
          </LazyMotion>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Contact);
