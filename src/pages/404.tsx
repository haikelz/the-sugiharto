import { memo, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";

const NotFoundPage = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  });

  return (
    <>
      <Head>
        <title>Oops, Halaman tidak ditemukan</title>
      </Head>
      <div className="flex h-screen items-center justify-center">
        <p className="text-2xl font-bold text-white">
          Oopss, halaman yang anda tuju tidak ditemukan!
        </p>
      </div>
    </>
  );
};

export default memo(NotFoundPage);
