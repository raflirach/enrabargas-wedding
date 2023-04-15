import Link from "next/link";

export default function Event() {
  return (
    <div className="relative" id="event">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1631133961299-4bbfedcac74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 grid place-items-center text-primary text-center font-semibold antialiased py-8">
        <div>
          <div className="relative flex flex-col justify-center items-center mx-8 p-8 backdrop-filter backdrop-brightness-[.75] mb-2">
            <div className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary" />
            <img
              src="./ring.svg"
              className="h-14 w-14 mb-4 animate-bounce-slow"
            />
            <div className="mb-1 text-2xl">Akad Nikah</div>
            <div className="flex justify-evenly w-full items-center">
              <div className="text-xl w-1/3">Sabtu</div>
              <div className="flex flex-col border-r border-l border-primary px-5 w-1/3">
                <div className="text-4xl leading-6">15</div>
                <div className="text-2xl">2023</div>
              </div>
              <div className="text-xl w-1/3">Juli</div>
            </div>
            <div className="text-lg font-fira">09.00 ~ Selesai</div>
            <div className="my-2 text-lg">Alamat</div>
            <div className="text-xl">Imah Asta</div>
            <div className="text-md font-fira">
              Babakan Asta, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa
              Barat 40394
            </div>
            <Link href="https://goo.gl/maps/gQqrnGf6fYyN2vc97" className="text-sm border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10">
              <div className="flex justify-center items-center gap-1">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>{" "}
                Lihat Lokasi
              </div>
            </Link>
          </div>
          <div className="relative flex flex-col justify-center items-center mx-8 p-8 backdrop-filter backdrop-brightness-[.75]">
            <div className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary" />
            <img
              src="./rose.svg"
              className="h-14 w-14 mb-4 animate-bounce-slow"
            />
            <div className="mb-1 text-2xl">Resepsi</div>
            <div className="flex justify-evenly w-full items-center">
              <div className="text-xl w-1/3">Sabtu</div>
              <div className="flex flex-col border-r border-l border-primary px-5 w-1/3">
                <div className="text-4xl leading-6">15</div>
                <div className="text-2xl">2023</div>
              </div>
              <div className="text-xl w-1/3">Juli</div>
            </div>
            <div className="text-lg font-fira">11.00 ~ Selesai</div>
            <div className="my-2 text-lg">Alamat</div>
            <div className="text-xl">Imah Asta</div>
            <div className="text-md font-fira">
              Babakan Asta, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa
              Barat 40394
            </div>
            <Link href="https://goo.gl/maps/gQqrnGf6fYyN2vc97" className="text-sm border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10">
              <div className="flex justify-center items-center gap-1">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>{" "}
                Lihat Lokasi
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
