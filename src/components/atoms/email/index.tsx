import Image from "next/image";

const Email = () => {
  return (
    <div className="mt-4 flex">
      <div className="mx-3 flex items-center justify-center rounded-sm bg-white/5 px-4 font-bold">
        <Image src="/email.svg" width="25px" height="25px" alt="Email" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm opacity-60">Email</h3>
        <span className="font-extrabold">Support@collosal.tld</span>
      </div>
    </div>
  );
};

export default Email;
