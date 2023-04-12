import DateTimeDisplay from "./dateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-2">
      <DateTimeDisplay value={days} type={'Hari'} />
      <DateTimeDisplay value={hours} type={'Jam'} />
      <DateTimeDisplay value={minutes} type={'Menit'} />
      <DateTimeDisplay value={seconds} type={'Detik'} />
    </div>
  );
};
