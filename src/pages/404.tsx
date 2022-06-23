import Head from 'next/head'

const NotFoundPage = () => {
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
  )
}

export default NotFoundPage
