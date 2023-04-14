export default function Bride() {
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
      <div className="relative z-10 h-screen grid place-items-center text-primary text-center font-semibold antialiased">
        <div className="relative flex flex-col justify-center items-center mx-8 p-8 backdrop-filter backdrop-brightness-[.75]">
          <div className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary" />
          <div className="mb-4 text-lg font-fira">
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </div>
          <div className="mb-4 text-xl">Assalamu’alaikum Wr. Wb.</div>
          <div className="text-center font-fira">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            insyaaAllah kami akan menyelenggarakan acara pernikahan :
          </div>
          <div className="my-12">
            <div>
              <div className="font-extrabold text-xl">
                Rakananda Alysa Indioka
              </div>
              <div className="font-fira">
                Putri dari Mohamad Tasrik & Lilih Lisnawati
              </div>
            </div>
            <div className="text-4xl my-4 flex justify-center items-center gap-4">
              <div>
                <hr className="left-0 right-0 border-b-1 border-solid border-primary w-20" />
              </div>
              <div className="text-5xl italic">&</div>
              <div>
                <hr className="left-0 right-0 border-b-1 border-solid border-primary w-20" />
              </div>
            </div>
            <div>
              <div className="font-extrabold text-xl">Rafli Rachmawandi</div>
              <div className="font-fira">
                Putra dari Kamil Johari & Yeni Supriyani
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
