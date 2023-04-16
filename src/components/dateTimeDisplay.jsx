import { trans } from "@/helpers/utils";

const DateTimeDisplay = ({ value, type, m, i }) => {
  return (
    <div className="flex flex-col text-center w-20">
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        transition={{ ...trans, delay: 1 + (i * .2) }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-4xl"
      >
        {value}
      </m.div>
      <m.div
        initial={{ y: "100%", opacity: 0 }}
        transition={{ ...trans, delay: 1 + (i * .4) }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="font-alice"
      >
        {type}
      </m.div>
    </div>
  );
};

export default DateTimeDisplay;
