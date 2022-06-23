import { listOverviewPekerjaan, listOverviewPendidikan } from 'src/list'
import { LazyMotion, m, domAnimation } from 'framer-motion'
import Image from 'next/image'

const OverviewKet = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="tablet:max-w-[50%]">
        <m.div
          className="relative flex items-center"
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="-ml-6 text-6xl font-extrabold opacity-[3%] tablet:-ml-10 tablet:text-7xl">
            Overview
          </h1>
          <h1 className="absolute text-3xl font-bold">Overview</h1>
        </m.div>

        <m.div
          className="flex flex-col items-start tablet:hidden"
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Image src="/sugiharto.png" width="200px" height="250px" />
          <span className="mt-2 opacity-60">Foto diambil 2018</span>
        </m.div>
        <m.p
          className="my-6 pr-4 opacity-60"
          transition={{ duration: 0.5, delay: 1.5 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Nama saya Dedik Sugiharto, saya seorang software-engineer sebelum kata
          software-engineer itu ada. Saya terbiasa ngoding di Microsoft Word
          2003.
        </m.p>

        <m.div
          transition={{ duration: 0.5, delay: 2 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-2 text-2xl font-bold">Pendidikan</h1>
          <ul>
            {listOverviewPendidikan?.map((edu: any, index: number) => (
              <div className="flex items-center leading-[35px]" key={index + 1}>
                <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
                  <div className="rounded-full bg-white p-1"></div>
                </div>
                <p className="font-semibold">{edu.edu}</p>
              </div>
            ))}
          </ul>
        </m.div>

        <m.div
          transition={{ duration: 0.5, delay: 2.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mt-6 mb-2 text-2xl font-bold">Pekerjaan</h1>
          <ul>
            {listOverviewPekerjaan.map((work: any, index: number) => (
              <div
                className="mb-3 flex items-center md:mb-0 md:leading-[35px]"
                key={index + 1}
              >
                <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
                  <div className="rounded-full bg-white p-1"></div>
                </div>
                <p className="font-semibold">{work.experience}</p>
              </div>
            ))}
          </ul>
        </m.div>
      </div>
    </LazyMotion>
  )
}

export default OverviewKet
