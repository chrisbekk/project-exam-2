import Calendar from '../Calendar';

export default function DateManager({
  bookings,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  return (
    <div className="mt-3">
      <h2 className="mb-3 text-xl font-semibold">Book your dates!</h2>
      <div>
        <Calendar
          bookings={bookings}
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
      </div>
    </div>
  );
}
