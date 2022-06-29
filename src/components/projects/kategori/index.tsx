import { domAnimation, m, LazyMotion } from 'framer-motion'

const KategoriProjects = () => {
  return (
    <div className="tablet:max-w-[35%]">
      <LazyMotion features={domAnimation}>
        <m.div
          className="relative flex items-center"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="absolute -ml-6 text-6xl font-extrabold opacity-5 tablet:-ml-10 tablet:text-7xl">
            Projects
          </h1>
          <h1 className="text-3xl font-bold">Projects</h1>
        </m.div>
        <m.p
          className="mt-8 mb-6 opacity-60"
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya
          buat.
        </m.p>
        <m.ul
          className="leading-[35px]"
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center">
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white p-1"></div>
            </div>
            <p className="font-semibold">Semua Kategori</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white/50 p-1"></div>
            </div>
            <p className="opacity-60">UI Design</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white/50 p-1"></div>
            </div>
            <p className="opacity-60">Web Development</p>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex items-center rounded-full bg-white/50 p-1">
              <div className="rounded-full bg-white/50 p-1"></div>
            </div>
            <p className="opacity-60">Mobile Development</p>
          </div>
        </m.ul>
      </LazyMotion>
    </div>
  )
}

export default KategoriProjects
