export default function Bride() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 h-screen grid place-items-center text-primary text-center font-semibold">
        <div className="flex flex-col justify-center items-center mx-8 p-8 glass">
          <div
            className="left-0 right-0 border-b-2 border-solid w-5/6 mb-8"
            style={{
              borderImage:
                "linear-gradient(to left, #146C94 30%, transparent 70%) 100% 1",
            }}
          ></div>
          <div className="mb-4 text-lg">
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </div>
          <div className="mb-4 text-xl">Assalamu’alaikum Wr. Wb.</div>
          <div className="text-center">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            insyaaAllah kami akan menyelenggarakan acara pernikahan :
          </div>
          <div className="my-8">
            <div>
              <div className="font-extrabold text-xl">
                Rakananda Alysa Indioka
              </div>
              <div>Putri dari Nama Bapak & Nama Ibu</div>
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
              <div>Putra dari Kamil Johari & Yeni Supriyani</div>
            </div>
          </div>
          <div
            className="left-0 right-0 border-b-2 border-solid w-5/6"
            style={{
              borderImage:
                "linear-gradient(to right, #146C94 30%, transparent 70%) 100% 1",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
