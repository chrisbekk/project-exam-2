import Calendar from '../Calendar';

export default function DateManager({
  bookings,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) {
  return (
    <div>
      <h1>Book your dates!</h1>
      <div>
        <h2>Check In Date</h2>
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
