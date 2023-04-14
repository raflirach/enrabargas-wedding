export default function SubHeader() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-fixed bg-cover"></div>
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl italic">
        <div className="p-8 relative bg-primary text-background">
          <div className="w-full h-full border-2 border-secondary absolute top-2 left-2" />
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.” QR. Ar-rum 21
        </div>
      </div>
    </div>
  );
}
