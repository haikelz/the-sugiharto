import { NextRouter, useRouter } from "next/router";
import { listNavDesktop, listNavMobile } from "src/utils/data";
import { atom, useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

const isOpenAtom = atom<boolean>(false);

const Header = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const router: NextRouter = useRouter();
  const routerAsPath = router.asPath;
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="hidden justify-between tablet:flex">
        <ul className="flex items-center gap-10 font-semibold">
          <Link href="/" passHref>
            <h1 className="cursor-pointer rounded-md bg-white px-3.5 py-1.5 text-2xl font-bold text-black transition-all duration-300 hover:bg-[#ded9d9]">
              S
            </h1>
          </Link>
          {listNavDesktop.map((list, index) => (
            <Link href={list.href} key={index + 1} passHref>
              <li
                className={`cursor-pointer opacity-[60%] transition-all duration-300 hover:opacity-100 ${
                  routerAsPath.includes(list.href) ? "opacity-100" : null
                }`}
              >
                {list.li}
              </li>
            </Link>
          ))}
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
              <Image src="/bar.svg" width="30px" height="30px" alt="bar" />
            ) : (
              <Image src="/close.svg" width="30px" height="30px" alt="close" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
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
      )}
    </>
  );
};

export default Header;
