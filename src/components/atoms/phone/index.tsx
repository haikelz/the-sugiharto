import Image from "next/image";

const Phone = () => {
  return (
    <div className="flex">
      <div className="mx-3 flex items-center justify-center rounded-sm bg-white/5 px-4 font-bold">
        <Image src="/telepon.svg" width="25px" height="25px" alt="telepon" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm opacity-60">Phone</h3>
        <span className="font-extrabold">+62 1234 8921</span>
      </div>
    </div>
  );
};

export default Phone;
