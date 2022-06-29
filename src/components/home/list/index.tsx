import { LazyMotion, m, domAnimation } from 'framer-motion'

const ListHome = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.ul
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8 flex"
      >
        <li>
          <p className="mr-8 text-sm opacity-[60%]">Projects</p>
          <p className="mr-8 text-xl font-semibold md:mr-0">12</p>
        </li>
        <li>
          <p className="mr-8 text-sm opacity-[60%]">Experience</p>
          <p className="mr-8 text-xl font-semibold md:mr-0">8yrs</p>
        </li>
        <li>
          <p className="text-sm opacity-[60%]">Nationality</p>
          <p className="text-xl font-semibold md:mr-0">IDN 🇮🇩</p>
        </li>
      </m.ul>
    </LazyMotion>
  )
}

export default ListHome
