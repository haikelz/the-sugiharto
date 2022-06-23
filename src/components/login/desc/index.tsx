import Image from 'next/image'

const DescLogin = () => {
  return (
    <div className="z-50 flex max-w-full items-center justify-center bg-gradient-to-b  from-[#3730A3] to-[#312E81] lg:max-w-[50%]">
      <div className="flex flex-col py-20">
        <Image src="/login.svg" width="900px" height="400px" />
        <div className="mt-4 flex flex-col px-14 lg:px-20">
          <p className="text-[14px] font-semibold opacity-60">
            NAMANYAJUGABELAJAR.IO
          </p>
          <p className="mt-2 text-2xl leading-relaxed">
            Belajar secara online semakin mudah – tetep belajar walaupun pake
            kuota dari Kemendikbud hehe~
          </p>
        </div>
      </div>
    </div>
  )
}

export default DescLogin
