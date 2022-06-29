import { LazyMotion, m, domAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ButtonNext = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex"
      >
        <Link href="/overview" passHref>
          <button className="mt-8 flex items-center font-semibold">
            <span className="mr-3">Go to Overview</span>
            <Image src="/next.svg" width="20px" height="20px" />
          </button>
        </Link>
      </m.div>
    </LazyMotion>
  )
}

export default ButtonNext
