import { scale, trans } from "@/helpers/utils";

export default function Footer({ m }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-fixed bg-cover"></div>
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl">
        <m.div
          initial={scale(0)}
          transition={trans}
          whileInView={scale(1)}
          viewport={{ once: true, amount: 0.8 }}
          className="p-8 relative bg-primary text-background text-center"
        >
          <m.div
            initial={scale(0)}
            transition={{ ...trans, delay: 0.5 }}
            whileInView={scale(1)}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full h-full border-2 border-secondary absolute top-2 left-2 font-fira"
          />
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ ...trans, delay: 0.8 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-sm"
          >
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kedua mempelai.
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ ...trans, delay: 1 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-sm my-4 italic"
          >
            Hormat Kami Mengundang
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ ...trans, delay: 1.2 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-xl"
          >
            Rafli & Raka
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
