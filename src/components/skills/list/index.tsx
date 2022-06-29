import { listSkills } from 'src/list'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import Image from 'next/image'

const ListSkills = () => {
  return (
    <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-2 md:gap-6 tablet:grid-cols-3">
      <LazyMotion features={domAnimation}>
        {listSkills.map((skill: any, index: number) => (
          <m.div
            className="mb-10 flex w-full flex-col flex-wrap items-center text-center"
            key={index + 1}
            transition={{ duration: 0.5, delay: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image src={skill.img} width="400px" height="400px" />
            <div className="tablet:px-3.5">
              <h1 className="text-lg font-semibold">{skill.skill}</h1>
              <div className="flex items-center justify-center tablet:block">
                <p className="opacity-60 sm:max-w-full md:max-w-[65%] tablet:max-w-full">
                  {skill.ket}
                </p>
              </div>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  )
}

export default ListSkills
