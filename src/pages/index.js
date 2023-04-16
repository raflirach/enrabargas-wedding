import Navbar from "@/components/navbar";
import { useDimensions } from "@/hooks/useDimensions";
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
import { motion, useCycle } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const audioElement = useRef();
  const [isPlay, setIsPlay] = useState(false);

  const handleOnOpen = () => {
    toggleOpen();
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsPlay(!isPlay);
      isPlay ? audioElement.current.pause() : audioElement.current.play();
    }, 3900);
  };

  const handleOnClick = () => {
    setIsPlay(!isPlay);
    isPlay ? audioElement.current.pause() : audioElement.current.play();
  };

  const transition = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 40,
        damping: 30,
      },
    },
  };
  const [isOpen2, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen2 ? "closed" : "open"}
      custom={height}
      ref={containerRef}
    >
      <main className=" bg-background text-primary border-secondary font-alice">
        {!isOpen ? (
          <Opening handleOnOpen={handleOnOpen} transition={transition} />
        ) : (
          <>
            <Navbar
              handleOnClick={handleOnClick}
              audioElement={audioElement}
              isPlay={isPlay}
              setIsPlay={setIsPlay}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ etype: "spring", stiffness: 100, duration: 2 }}
            >
              <Header />
              <SubHeader />
              <Bride />
              <Countdown />
              <Event />
              <Gallery />
              <Gift />
              <Footer />
            </motion.div>
          </>
        )}
      </main>
      <audio ref={audioElement} src="./wedding-bell.mp3"></audio>
    </motion.nav>
  );
}
