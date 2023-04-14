import { useState } from "react";

export default function Gift() {
  const [clicked, setClicked] = useState(false)
  const [clicked2, setClicked2] = useState(false)

  const handleOnClick = () => {
    navigator.clipboard.writeText(2832342361)
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }

  const handleOnClick2 = () => {
    navigator.clipboard.writeText(7401814837)
    setClicked2(true);
    setTimeout(() => {
      setClicked2(false);
    }, 3000);
  }

  return (
    <div className="relative" id="gift">
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
          <div className="relative flex flex-col justify-center items-center mx-4 p-4 backdrop-filter backdrop-brightness-[.75] mb-2">
            <div className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary" />
            <div className="text-2xl">Kirim Hadiah</div>
          </div>
          <div className="flex gap-2">
            <div className="relative flex flex-col justify-center items-center ml-4 p-4 w-1/2 backdrop-filter backdrop-brightness-[.75]">
              <div className="absolute border-2 border-solid w-full h-full top-2 -left-2 border-primary" />
              <img src="./bca.svg" className="h-20 w-20 animate-pulse" />
              <div className="text-md font-fira">a/n Rafli Rachmawandi</div>
              <div className="mb-1 text-lg">2832342361</div>
              <button className="text-sm border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10" onClick={handleOnClick}>
                <div className="flex justify-center items-center gap-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                    />
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                    />
                  </svg>
                  {clicked ? 'Copied' : 'Copy'}
                </div>
              </button>
            </div>
            <div className="relative flex flex-col justify-center items-center mr-4 p-4 w-1/2 backdrop-filter backdrop-brightness-[.75]">
              <div className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary" />
              <img src="./bca.svg" className="h-20 w-20 animate-pulse" />
              <div className="text-md font-fira">a/n Rakananda Alysa Indioka</div>
              <div className="mb-1 text-lg">7401814837</div>
              <button className="text-sm border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10" onClick={handleOnClick2}>
                <div className="flex justify-center items-center gap-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                    />
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                    />
                  </svg>
                  {clicked2 ? 'Copied' : 'Copy'}
                </div>
              </button>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center mx-4 p-4 backdrop-filter backdrop-brightness-[.75] mt-4">
            <div className="absolute border-2 border-solid w-full h-full top-2 left-2 border-primary" />
            <div className="text-xl">Alamat</div>
            <div className="font-fira text-sm">Abdi Negara</div>
          </div>
        </div>
      </div>
    </div>
  );
}
