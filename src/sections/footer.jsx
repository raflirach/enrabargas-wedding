import { vFadeInBottom, vScale } from "@/helpers/utils";
import data from "@/data/wedding-data.json";

export default function Footer({ m }) {
  return (
    <div className="relative">
      {data.show_gallery ? (
        <div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/58/21/ec/5821ec3fa84c3512776054ede194f437.jpg")`,
            backgroundSize: "fit auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      ) : (
        <div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${data.images[1]})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      )}
      <div className="relative z-10 py-20 px-8 xs:px-4 grid place-items-center text-xl">
        <m.div
          custom={0}
          initial="init"
          whileInView="anim"
          viewport={{ once: true }}
          variants={vScale}
          className="p-8 xs:p-6 relative bg-primary text-background text-center"
        >
          <m.div
            custom={1}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vScale}
            className="w-full h-full border-2 border-secondary absolute top-2 left-2 font-fira"
          />
          <m.div
            custom={2}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInBottom}
            className="text-sm"
          >
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kedua mempelai.
          </m.div>
          <m.div
            custom={3}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInBottom}
            className="text-sm my-4 italic"
          >
            {" "}
            Hormat Kami{" "}
          </m.div>
          <m.div
            custom={4}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInBottom}
            className="text-xl"
          >
            {" "}
            {data.bride.nickname} & {data.groom.nickname}{" "}
          </m.div>
          <m.div
            custom={5}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInBottom}
            className="text-lg font-bold mt-4 italic"
          >
            Turut Mengundang
          </m.div>
          <div className="grid grid-cols-2 place-content-start pt-2">
            <div className="">
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm font-bold mt-4 italic"
              >
                Pihak Pengantin Perempuan:
              </m.div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm"
              >
                Agus Gunarsa
              </m.div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm"
              >
                Asep Supriatna
              </m.div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm"
              >
                Rahmat Gunawan
              </m.div>
            </div>
            <div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm font-bold mt-4 italic"
              >
                Pihak Pengantin Laki-laki:
              </m.div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm"
              >
                Bapak Adang Ijip
              </m.div>
              <m.div
                custom={6}
                initial="init"
                whileInView="anim"
                viewport={{ once: true }}
                variants={vFadeInBottom}
                className="text-sm"
              >
                Feri Kurniawan
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}
