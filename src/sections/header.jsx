import { vFadeInBottom, vFadeInLeft, vFadeInRight, vFadeInTop, vShowInRight } from "@/helpers/utils";
import { useTransition, animated } from "@react-spring/web";
import {
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1631133961299-4bbfedcac74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "foto/DSC_0172.jpg",
  "foto/DSC_0038.jpg",
  "foto/DSC_0058.jpg",
  "foto/DSC_0065.jpg",
  "foto/DSC_0072.jpg",
  "foto/DSC_0142.jpg",
  "foto/DSC_0198.jpg",
  "foto/DSC_0044.jpg",
  "foto/DSC_0103.jpg",
  "foto/DSC_0119.jpg",
];

export default function Header({ m }) {
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

  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    setTimeout(() => {
      const animation = animate(count, 15, { duration: 2 });
      const animation2 = animate(count2, 7, { duration: 3 });
      const animation3 = animate(count3, 2023, { duration: 4 });

      return [animation.stop, animation2.stop, animation3.stop];
    }, 4000);
  }, []);

  return (
    <div className="relative" id="home">
      {transitions((style, i) => (
        <animated.div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}
      <m.div className="relative z-10 h-[100dvh] grid place-items-center text-center font-alice backdrop-filter backdrop-brightness-[.90] text-primary antialiased">
        <div className="w-3/4 py-2 px-2 rounded-lg overflow-hidden">
          <m.div custom={10} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInBottom} className="text-2xl xs:text-xl">The Wedding Of</m.div>
        </div>
        <div className="relative flex justify-center items-center">
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInRight} className="absolute text-5xl xs:text-4xl -bottom-2 right-4 overflow-hidden">R</m.div>
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="absolute text-7xl xs:text-6xl">/</m.div>
          <m.div custom={11} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInLeft} className="absolute text-5xl xs:text-4xl top-0 left-4 overflow-hidden">R</m.div>
        </div>
        <div className="overflow-hidden">
          <m.div custom={12} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="text-4xl xs:text-3xl mb-2">Rafli & Raka</m.div>
          <m.div custom={12} initial="init" whileInView="anim" viewport={{ once: true }} variants={vShowInRight} className="border-b border-primary"></m.div>
          <div className="flex justify-center items-center w-full">
            <div className="py-2">
              <m.div custom={13} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop} className="text-4xl xs:text-3xl tracking-widest font-light mb-6 flex justify-center items-center">
                <m.span>{rounded}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded2}</m.span> <span className="mx-2">.</span>{" "}
                <m.span>{rounded3}</m.span>
              </m.div>
              <m.div custom={14} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInTop}>
                <Link
                  href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MDBvaDBwdjEyMGV1Y3NoaTcxdjRjbXE3ODIgcmFmbGkwNjAzOTVAbQ&amp;tmsrc=rafli060395%40gmail.com"
                  className="text-2xl xs:text-xl border px-4 py-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30"
                >
                  Save the date
                </Link>
              </m.div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
