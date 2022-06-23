import { listProjects } from 'src/list'
import Image from 'next/image'
import { domAnimation, LazyMotion, m } from 'framer-motion'

const ListProjects = () => {
  return (
    <div className="flex w-full items-center justify-center  tablet:items-end tablet:justify-end">
    <LazyMotion features={domAnimation}>
      <m.div className="grid-rows-l mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 tablet:mt-0 tablet:pl-10" transition={{duration: 0.5, delay: 2}} initial={{opacity: 0}} animate={{opacity: 1}}>
        {listProjects.map((list: any, index: number) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index + 1}
          >
            <div className="flex flex-col items-center rounded-[6px] bg-white/5 p-4 text-center">
              <Image src={list.img} width="300px" height="200px" />
              <h1 className="mb-3 mt-5 text-lg font-semibold">{list.nama}</h1>
              <p className="mb-5 text-sm opacity-60">{list.ket}</p>
            </div>
          </div>
        ))}
      </m.div>
      </LazyMotion>
    </div>
  )
}

export default ListProjects
