import { domAnimation, LazyMotion, m } from 'framer-motion'
import Image from 'next/image'

const ContactSugiharto = () => {
  return (
    <div className="mt-10 flex flex-col justify-center">
    <LazyMotion features={domAnimation}>
      <m.div className="flex flex-col items-end tablet:items-center" transition={{duration: 0.5, delay: 2}} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}>
        <div className="flex items-end justify-end tablet:items-center tablet:justify-center">
          <div className="max-w-full rounded-md border-[1px] border-white/10 bg-white/10 p-4 sm:max-w-[50%] md:-translate-x-20">
            <p>“Aku akan sangat senang sekali mendapat pesan dari Anda”</p>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <div className="mt-6 flex justify-end md:ml-14 md:justify-center">
            <div className="flex items-center justify-center rounded-full bg-white/5 p-2 md:p-4">
              <div className="flex items-center justify-center rounded-full bg-white/5 p-2 md:p-4">
                <Image
                  src="/contact-sugiharto.png"
                  width="50px"
                  height="50px"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </m.div>
      </LazyMotion>
    </div>
  )
}

export default ContactSugiharto
