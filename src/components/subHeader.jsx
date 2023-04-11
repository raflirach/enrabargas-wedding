export default function SubHeader() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-fixed bg-cover"></div>
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl italic">
        <div
          className="p-4 border-t-2 border-solid border-opacity-100 border-r-0 border-b-0 border-l-0 relative"
          style={{
            borderImage:
              "linear-gradient(to right, #146C94 40%, transparent 60%) 100% 1",
          }}
        >
          <div
            className="p-4 absolute bottom-0 left-0 right-0 border-b-2 border-solid border-opacity-100"
            style={{
              borderImage:
                "linear-gradient(to left, #146C94 40%, transparent 60%) 100% 1",
            }}
          ></div>
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.” QR. Ar-rum 21
        </div>
      </div>
    </div>
  );
}
