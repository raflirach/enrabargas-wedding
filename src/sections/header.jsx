import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1631133961299-4bbfedcac74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];

export default function Header() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <div className="relative" id="home">
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="relative z-10 h-screen grid place-items-center text-center font-alice backdrop-filter backdrop-brightness-[.90] text-primary antialiased">
        <div className="w-3/4 py-2 px-2 rounded-lg">
          <div className="text-2xl">The Wedding Of</div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute text-5xl top-0 right-4">R</div>
          <div className="absolute text-7xl">/</div>
          <div className="absolute text-5xl top-8 left-4">R</div>
        </div>
        <div>
          <div className="text-4xl mb-2">Rafli & Raka</div>
          <div className="border-b border-primary"></div>
          <div className="flex justify-center items-center w-full">
            <div className="py-2">
              <div className="text-4xl tracking-widest font-light">15  .  07  .  2023</div>
              <button className="text-2xl border mt-6 px-4 py-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30">Save the date</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
