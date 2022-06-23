import { layout } from '../../types'
import { listNavMobile } from '../../list'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Layout = ({ children, title }: layout) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <Head>
        <title>{title} | The Sugiharto</title>
      </Head>
      <section className="max-w-full overflow-hidden bg-[#1E1F2B] px-8 py-8 text-white tablet:max-w-[75%] tablet:translate-x-[15%] tablet:overflow-visible tablet:px-0 tablet:py-12">
        <div className="relative">
          {/*Header*/}

          <header className="hidden justify-between tablet:flex">
            <ul className="flex items-center font-semibold">
              <Link href="/" passHref>
                <h1 className="mr-10 cursor-pointer rounded-md bg-white px-3.5 py-1.5 text-2xl font-bold text-black transition-all duration-300 hover:bg-[#ded9d9]">
                  S
                </h1>
              </Link>
              <Link href="/overview" passHref>
                <li className="mr-14 cursor-pointer opacity-[60%] transition-all duration-300 hover:opacity-100">
                  Overview
                </li>
              </Link>
              <Link href="/skills" passHref>
                <li className="mr-14 cursor-pointer opacity-[60%] transition-all duration-300 hover:opacity-100">
                  Skills
                </li>
              </Link>
              <Link href="/projects" passHref>
                <li className="mr-14 cursor-pointer opacity-[60%] transition-all duration-300 hover:opacity-100">
                  Projects
                </li>
              </Link>
              <Link href="/contact" passHref>
                <li className="mr-14 cursor-pointer opacity-[60%] transition-all duration-300 hover:opacity-100">
                  Contact
                </li>
              </Link>
            </ul>
            <Link href="/login" passHref>
              <button className="rounded-lg bg-[#2BA386] px-8 py-3 font-sanspro font-bold transition-all duration-300 hover:bg-[#2a806b] ">
                Punya Project?
              </button>
            </Link>
          </header>

          <div className="flex items-center justify-between tablet:hidden">
            <Link href="/" passHref>
              <h1 className="mr-10 cursor-pointer rounded-md bg-white px-2.5 py-0.5 text-2xl font-bold text-black transition-all duration-300 hover:bg-[#ded9d9] tablet:px-3.5 tablet:py-1.5">
                S
              </h1>
            </Link>
            <div className="flex justify-end">
              <button onClick={handleClick}>
                {!isOpen ? (
                  <Image src="/bar.svg" width="30px" height="30px" />
                ) : (
                  <Image src="/close.svg" width="30px" height="30px" />
                )}
              </button>
            </div>
          </div>

          {isOpen ? (
            <div className="absolute z-10 flex w-full justify-end tablet:hidden">
              <ul className="flex w-[50%] flex-col items-center justify-center overflow-hidden rounded-md bg-slate-100 text-center text-black">
                {listNavMobile.map((list, index) => (
                  <Link href={list.href} key={index + 1}>
                    <li className="w-full cursor-pointer border-b-[1px] border-slate-200 py-3 font-bold transition-all duration-300 hover:bg-slate-600 hover:text-white">
                      {list.li}
                    </li>
                  </Link>
                ))}
                <Link href="/login" passHref>
                  <li className="w-full cursor-pointer py-3 font-bold transition-all duration-300 hover:bg-slate-600 hover:text-white">
                    Punya Projects?
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        {children}
      </section>
    </>
  )
}

export default Layout
