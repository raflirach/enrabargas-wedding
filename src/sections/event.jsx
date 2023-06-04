import { vFadeInBottom, vFadeInLeft, vFadeInRight, vScale } from "@/helpers/utils";
import Link from "next/link";

export default function Event({ m }) {
  return (
    <div className="relative overflow-hidden" id="event">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1631133961299-4bbfedcac74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <m.div className="relative z-10 grid place-items-center text-primary text-center font-semibold antialiased py-8 px-8 xs:px-4">
        <div>
          <m.div custom={0} initial="init" whileInView="anim" variants={vScale} className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75] mb-2">
            <m.div custom={1} initial="init" whileInView="anim" variants={vScale} className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary"/>
            <m.img custom={2} initial="init" whileInView="anim" variants={vScale} src="./ring.svg" className="h-14 w-14 xs:h-10 xs:w-10 mb-4 animate-bounce-slow"/>
            <m.div custom={3} initial="init" whileInView="anim" variants={vFadeInBottom} className="mb-1 text-2xl xs:text-xl"> Akad Nikah </m.div>
            <div className="flex justify-evenly w-full items-center">
              <m.div custom={4} initial="init" whileInView="anim" variants={vFadeInRight} className="text-xl xs:text-lg w-1/3"> Sabtu </m.div>
              <m.div custom={4} initial="init" whileInView="anim" variants={vScale} className="flex flex-col border-r border-l border-primary px-5 w-1/3">
                <m.div custom={5} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-4xl xs:text-3xl leading-6 xs:leading-4"> 15 </m.div>
                <m.div custom={6} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-2xl xs:text-xl"> 2023 </m.div>
              </m.div>
              <m.div custom={4} initial="init" whileInView="anim" variants={vFadeInLeft} className="text-xl xs:text-lg w-1/3"> Juli </m.div>
            </div>
            <m.div custom={7} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-lg xs:text-md font-fira"> 09.00 ~ Selesai </m.div>
            <m.div custom={8} initial="init" whileInView="anim" variants={vFadeInBottom} className="my-2 text-lg xs:text-md"> Alamat </m.div>
            <m.div custom={9} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-xl xs:text-lg"> Imah Asta </m.div>
            <m.div custom={10} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-md xs:text-sm font-fira">
              Babakan Asta, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa
              Barat 40394
            </m.div>
            <Link
              href="https://goo.gl/maps/gQqrnGf6fYyN2vc97"
              className="text-sm xs:text-xs border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10"
            >
              <m.div custom={11} initial="init" whileInView="anim" variants={vScale} className="flex justify-center items-center gap-1">
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
              </m.div>
            </Link>
          </m.div>
          <m.div custom={0} initial="init" whileInView="anim" variants={vScale} className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75]">
            <m.div custom={1} initial="init" whileInView="anim" variants={vScale} className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary" />
            <m.img custom={2} initial="init" whileInView="anim" variants={vScale} src="./rose.svg" className="h-14 w-14 xs:h-10 xs:w-10 mb-4 animate-bounce-slow" />
            <m.div custom={3} initial="init" whileInView="anim" variants={vFadeInBottom} className="mb-1 text-2xl xs:text-xl"> Resepsi </m.div>
            <div className="flex justify-evenly w-full items-center">
              <m.div custom={4} initial="init" whileInView="anim" variants={vFadeInRight} className="text-xl xs:text-lg w-1/3"> Sabtu </m.div>
              <m.div custom={4} initial="init" whileInView="anim" variants={vScale} className="flex flex-col border-r border-l border-primary px-5 w-1/3" >
                <m.div custom={5} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-4xl xs:text-3xl leading-6 xs:leading-4"> 15 </m.div>
                <m.div custom={6} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-2xl xs:text-xl"> 2023 </m.div>
              </m.div>
              <m.div custom={4} initial="init" whileInView="anim" variants={vFadeInLeft} className="text-xl xs:text-lg w-1/3"> Juli </m.div>
            </div>
            <m.div custom={7} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-lg xs:text-md font-fira"> 11.00 ~ 14.00 </m.div>
            <m.div custom={8} initial="init" whileInView="anim" variants={vFadeInBottom} className="my-2 text-lg xs:text-md"> Alamat </m.div>
            <m.div custom={9} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-xl xs:text-lg"> Imah Asta </m.div>
            <m.div custom={10} initial="init" whileInView="anim" variants={vFadeInBottom} className="text-md xs:text-sm font-fira">
              Babakan Asta, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa
              Barat 40394
            </m.div>
            <Link
              href="https://goo.gl/maps/gQqrnGf6fYyN2vc97"
              className="text-sm xs:text-xs border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10"
            >
              <m.div custom={11} initial="init" whileInView="anim" variants={vScale} className="flex justify-center items-center gap-1">
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
              </m.div>
            </Link>
          </m.div>
        </div>
      </m.div>
    </div>
  );
}
