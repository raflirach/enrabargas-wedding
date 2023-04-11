import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

const slides = [
  'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
      <div className="relative z-10 h-screen grid place-items-center">
        <div className="backdrop-blur-sm w-3/4 bg-black bg-opacity-20 text-white py-2 px-2 rounded-lg">
          <div>The Wedding Of</div>
          <div className="text-4xl mb-4">Rafli & Icha</div>
          <div className="flex justify-between">
            <div className="p-2 border-r-2 border-t-2 border-white w-full h-full">
              <div>Save the date</div>
              <div>15 Juli 2023</div>
            </div>
            <div className="p-2 border-l-2 border-t-2 border-white w-full h-full">
              Kanan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
