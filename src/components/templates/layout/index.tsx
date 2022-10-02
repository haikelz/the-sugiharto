import { Layout } from "src/interfaces";
import Head from "next/head";
import Header from "src/components/organisms/header";

const Layout = ({ children, title }: Layout) => {
  return (
    <>
      <Head>
        <title>{title} | The Sugiharto</title>
      </Head>
      <section className="max-w-full overflow-hidden bg-[#1E1F2B] p-8 text-white tablet:max-w-[75%] tablet:translate-x-[15%] tablet:overflow-visible tablet:px-0 tablet:py-12">
        <div className="relative">
          <Header />
        </div>
        {children}
      </section>
    </>
  );
};

export default Layout;
