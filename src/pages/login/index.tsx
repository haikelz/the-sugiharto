import Head from 'next/head'
import FormLogin from 'src/components/login/form'
import DescLogin from 'src/components/login/desc'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="flex h-screen max-w-full flex-col text-white md:items-center md:justify-center lg:bg-[#1E1F2B]">
        <div className="flex max-w-full flex-col bg-white md:flex-row lg:h-[90%] lg:max-w-[80%]">
          <FormLogin />
          <DescLogin />
        </div>
      </section>
    </>
  )
}

export default Login
