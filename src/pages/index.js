import Navbar from "@/components/navbar";
import {
  Bride,
  Countdown,
  Event,
  Footer,
  Gallery,
  Gift,
  Header,
  Opening,
  SubHeader,
} from "@/sections";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const audioElement = useRef()
  const [isPlay, setIsPlay] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(!isOpen)
    setIsPlay(!isPlay);
    isPlay ? audioElement.current.pause() : audioElement.current.play();
  }

  const handleOnClick = () => {
    setIsPlay(!isPlay);
    isPlay ? audioElement.current.pause() : audioElement.current.play();
  };
  
  return (
    <>
      <Navbar handleOnClick={handleOnClick} audioElement={audioElement} isPlay={isPlay} setIsPlay={setIsPlay}/>
      <main className=" bg-background text-primary border-secondary font-alice">
        {!isOpen ? (
          <Opening handleOnOpen={handleOnOpen} />
        ) : (
          <>
            <Header />
            <SubHeader />
            <Bride />
            <Countdown />
            <Event />
            <Gallery />
            <Gift />
            <Footer />
          </>
        )}
      </main>
      <audio
        ref={audioElement}
        src="./wedding-bell.mp3"
      ></audio>
    </>
  );
}
