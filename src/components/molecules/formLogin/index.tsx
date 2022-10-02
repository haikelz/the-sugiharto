const FormLogin = () => {
  return (
    <div className="flex max-w-full flex-col justify-start bg-white shadow-lg md:max-w-[50%]">
      <div className="p-10 md:p-20">
        <div className="flex items-center">
          <span className="rounded-md bg-slate-200 px-4 py-2 text-2xl font-bold text-blue-500">
            G
          </span>
        </div>
        <div className="text-black">
          <h1 className="mt-6 text-2xl font-semibold">Masuk ke akun kamu</h1>
          <p className="mt-3 opacity-60">
            Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
            cita-citata sejak dalam embrio!
          </p>
        </div>
        <div className="flex flex-col text-black">
          <div className="mt-7 flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              className="mt-1 rounded-md bg-[#F3F4F6] py-3 px-6  outline-none"
              type="email"
              name="Email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="password" className="font-semibold">
                Kata sandi
              </label>
              <label
                htmlFor="password"
                className="font-semibold text-[#4F46E5]"
              >
                Lupa kata sandi?
              </label>
            </div>
            <input
              className="mt-1 rounded-md bg-[#F3F4F6] px-6 py-3 outline-none"
              type="password"
              name="Password"
              required
            />
          </div>
          <div className="my-4 flex items-center gap-2">
            <input
              className="appearance-none bg-[#F3F4F6] px-2.5 py-2.5 outline-none checked:bg-blue-500"
              type="checkbox"
              name="Cek"
              id="checkbox"
            />
            <label className="cursor-pointer font-semibold" htmlFor="checkbox">
              Ingat saya
            </label>
          </div>
          <button className="max-w-full rounded-md bg-[#4F46E5] py-4 font-semibold text-white drop-shadow-lg">
            Masuk
          </button>
          <div className="mt-10 flex justify-center text-center">
            <p>
              Belum punya akun?{" "}
              <span className="font-semibold text-[#4F46E5]">
                Daftar sekarang, gratis!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
