import { CountdownTimer } from "@/components/countDownTimer";
import { getTargetDate } from "@/helpers/formatDate";
import { scale, trans } from "@/helpers/utils";
import { useEffect, useState } from "react";

export default function Countdown({ m }) {
  const event_date = "2023-07-15T09:00:00+07:00";

  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = getTargetDate(event_date);
    setCountdown(targetDate);
  }, [event_date, countdown]);
  return (
    <div className="relative">
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl">
        <m.div
          initial={scale(0)}
          transition={{ ...trans }}
          whileInView={scale(1)}
          viewport={{ once: true, amount: 0.8 }}
          className="text-2xl xs:text-xl mb-10"
        >
          15 Juli 2023
        </m.div>
        <m.div
          initial={scale(0)}
          transition={{ ...trans, delay: 0.5 }}
          whileInView={scale(1)}
          viewport={{ once: true, amount: 0.8 }}
          className="relative bg-primary text-background"
        >
          <m.div
            initial={scale(0)}
            transition={{ ...trans, delay: 0.8 }}
            whileInView={scale(1)}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full h-full border-2 border-secondary absolute top-[0.375rem] left-[0.375rem]"
          />
          <CountdownTimer targetDate={countdown} m={m} />
        </m.div>
      </div>
    </div>
  );
}
