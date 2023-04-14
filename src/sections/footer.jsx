export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-fixed bg-cover"></div>
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl">
        <div className="p-8 relative bg-primary text-background text-center">
          <div className="w-full h-full border-2 border-secondary absolute top-2 left-2 font-fira" />
          <div className="text-sm">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.</div>
          <div className="text-sm my-4 italic">Hormat Kami Mengundang</div>
          <div className="text-xl">Rafli & Raka</div>
        </div>
      </div>
    </div>
  );
}
