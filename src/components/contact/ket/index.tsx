import { domAnimation, LazyMotion, m } from 'framer-motion'
import Image from 'next/image'

const ContactKet = () => {
  return (
    <div className="md:max-w-[30%]">
    <LazyMotion features={domAnimation}>
      <m.div className="relative flex items-center" transition={{duration: 0.5, delay: 0.5}} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}> 
        <h1 className="absolute -ml-6 text-6xl font-extrabold opacity-5 md:-ml-10 md:text-7xl">
          Contact
        </h1>
        <h1 className="text-3xl font-bold">Contact</h1>
      </m.div>
      <m.p className="mt-8 mb-6 opacity-60" transition={{duration: 0.5, delay: 1}} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}>
        Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.
      </m.p>

      <m.div transition={{duration: 0.5, delay: 1.5}} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>
      <div className="flex">
        <div className="mx-3 flex items-center justify-center rounded-sm bg-white/5 px-4 font-bold">
          <Image src="/telepon.svg" width="25px" height="25px" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm opacity-60">Phone</h3>
          <span className="font-extrabold">+62 1234 8921</span>
        </div>
      </div>

      <div className="mt-4 flex">
        <div className="mx-3 flex items-center justify-center rounded-sm bg-white/5 px-4 font-bold">
          <Image src="/email.svg" width="25px" height="25px" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm opacity-60">Email</h3>
          <span className="font-extrabold">Support@collosal.tld</span>
        </div>
      </div>
      </m.div>
      </LazyMotion>
    </div>
  )
}

export default ContactKet
