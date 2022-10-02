import { memo } from "react";
import Head from "next/head";
import FormLogin from "src/components/molecules/formLogin";
import LoginDesc from "src/components/organisms/loginDesc";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | The Sugiharto</title>
      </Head>
      <div className="flex h-screen max-w-full flex-col text-white md:items-center md:justify-center lg:bg-[#1E1F2B]">
        <div className="flex max-w-full flex-col bg-white md:flex-row lg:h-[90%] lg:max-w-[80%]">
          <FormLogin />
          <LoginDesc />
        </div>
      </div>
    </>
  );
};

export default memo(Login);
