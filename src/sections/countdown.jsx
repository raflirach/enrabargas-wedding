import { CountdownTimer } from "@/components/countDownTimer";
import { getTargetDate } from "@/helpers/formatDate";
import { useEffect, useState } from "react";

export default function Countdown() {
  const event_date = "2023-07-15T09:00:00+07:00";

  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = getTargetDate(event_date);
    setCountdown(targetDate);
  }, [event_date, countdown]);
  return (
    <div className="relative">
      <div className="relative z-10 py-20 px-8 grid place-items-center text-xl">
        <div className="text-2xl mb-10">15 Juli 2023</div>
        <div className="relative bg-primary text-background">
          <div className="w-full h-full border-2 border-secondary absolute top-[0.375rem] left-[0.375rem]"></div>
          <CountdownTimer targetDate={countdown} />
        </div>
      </div>
    </div>
  );
}
