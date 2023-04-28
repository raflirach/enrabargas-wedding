import { scale, trans } from "@/helpers/utils";

export default function SubHeader({ m }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-fixed bg-cover"></div>
      <div className="relative z-10 py-20 px-8 xs:px-4 grid place-items-center text-xl xs:text-lg italic">
        <m.div
          initial={scale(0)}
          transition={{ ...trans }}
          whileInView={scale(1)}
          viewport={{ once: true, amount: 0.8 }}
          className="p-8 xs:p-6 relative bg-primary text-background"
        >
          <m.div
            initial={scale(0)}
            transition={{ ...trans, delay: 0.3 }}
            whileInView={scale(1)}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full h-full border-2 border-secondary absolute top-2 left-2"
          />
          <m.span
            initial={scale(0)}
            transition={{ ...trans, delay: 0.6 }}
            whileInView={scale(1)}
            viewport={{ once: true, amount: 0.8 }}
          >
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang.” QR. Ar-rum 21
          </m.span>
        </m.div>
      </div>
    </div>
  );
}
