const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="flex flex-col text-center w-20">
      <div className="text-4xl">{value}</div>
      <div className="font-alice">{type}</div>
    </div>
  );
};

export default DateTimeDisplay;