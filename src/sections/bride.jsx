import { scale, trans } from "@/helpers/utils";

export default function Bride({ m }) {
  return (
    <div className="relative" id="bride">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 py-8 px-8 xs:px-4 grid place-items-center text-primary text-center font-semibold antialiased">
        <m.div
          initial={scale(0)}
          transition={trans}
          whileInView={scale(1)}
          viewport={{ once: true, amount: 0.8 }}
          className="relative flex flex-col justify-center items-center p-8 backdrop-filter backdrop-brightness-[.75]"
        >
          <m.div
            initial={scale(0)}
            transition={{ ...trans, delay: 0.5 }}
            whileInView={scale(1)}
            viewport={{ once: true, amount: 0.8 }}
            className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary"
          />
          <m.div
            initial={{ y: "100%", opacity: 0 }}
            transition={{ ...trans, delay: 1 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-4 text-lg xs:text-sm font-fira"
          >
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </m.div>
          <m.div
            initial={{ y: "100%", opacity: 0 }}
            transition={{ ...trans, delay: 1.2 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-4 text-xl xs:text-md"
          >
            Assalamu’alaikum Wr. Wb.
          </m.div>
          <m.div
            initial={{ y: "100%", opacity: 0 }}
            transition={{ ...trans, delay: 1.4 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-center font-fira xs:text-sm"
          >
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            insyaaAllah kami akan menyelenggarakan acara pernikahan:
          </m.div>
          <div className="my-12">
            <div>
              <m.div
                initial={{ y: "100%", opacity: 0 }}
                transition={{ ...trans, delay: 1.6 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="font-extrabold text-xl xs:text-lg"
              >
                Rakananda Alysa Indioka
              </m.div>
              <m.div
                initial={{ y: "100%", opacity: 0 }}
                transition={{ ...trans, delay: 1.8 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="font-fira xs:text-sm"
              >
                Putri dari Mohamad Tasrik & Lilih Lisnawati
              </m.div>
            </div>
            <div className="text-4xl my-4 flex justify-center items-center gap-4">
              <div>
                <m.hr
                  initial={{ x: "100%", opacity: 0 }}
                  transition={{ ...trans, delay: 2.6 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="left-0 right-0 border-b-1 border-solid border-primary w-20 xs:w-16"
                />
              </div>
              <m.div
                initial={scale(0)}
                transition={{ ...trans, delay: 2 }}
                whileInView={scale(1)}
                viewport={{ once: true, amount: 0.8 }}
                className="text-5xl xs:text-4xl italic"
              >
                &
              </m.div>
              <div>
                <m.hr
                  initial={{ x: "-100%", opacity: 0 }}
                  transition={{ ...trans, delay: 2.6 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="left-0 right-0 border-b-1 border-solid border-primary w-20 xs:w-16"
                />
              </div>
            </div>
            <div>
              <m.div
                initial={{ y: "100%", opacity: 0 }}
                transition={{ ...trans, delay: 2.2 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="font-extrabold text-xl xs:text-lg"
              >
                Rafli Rachmawandi
              </m.div>
              <m.div
                initial={{ y: "100%", opacity: 0 }}
                transition={{ ...trans, delay: 2.4 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="font-fira xs:text-sm"
              >
                Putra dari Kamil Johari & Yeni Supriyani
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}
