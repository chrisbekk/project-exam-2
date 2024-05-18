import getFormattedTodayDate from '../../utils/getTodayDate';
import getNextDay from '../../utils/getNextDay';
import calculateNightsBooked from '../../utils/calculateNightsBooked';
import { Section } from '../Section';
import { useEffect, useState } from 'react';
export default function BookingDates({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  nights,
  setNights,
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  const minFromDate = getFormattedTodayDate();
  const minToDate = getNextDay(fromDate);
  useEffect(() => {
    setNights(calculateNightsBooked(fromDate, toDate));
  }, [fromDate, toDate]);

  const handleChange = e => {
    setFromDate(e.target.value);
    setIsDisabled(false);
  };

  let nightCountString =
    nights === 1
      ? `${nights} night at destination`
      : `${nights} nights at destination`;
  return (
    <Section>
      <h2 className="mb-1 text-xl font-semibold">Book your dates</h2>
      <div className="min-h-14">
        {nights && nights !== 0 && (
          <p className="text-lg">{nightCountString}</p>
        )}
        <p className="text-sm font-thin text-neutral-500">
          {fromDate} - {toDate}
        </p>
      </div>
      <div className="gap-3 xs:flex">
        <div className="mt-4">
          <label
            htmlFor="fromDate"
            className="mb-1 block text-sm font-semibold"
          >
            From Date
          </label>
          <input
            id="fromDate"
            min={minFromDate}
            type="date"
            value={fromDate}
            className="  p-2 text-xl shadow-lg"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="toDate" className="mb-1 block text-sm font-semibold">
            To Date
          </label>
          <input
            id="toDate"
            min={minToDate}
            disabled={isDisabled}
            type="date"
            onChange={e => setToDate(e.target.value)}
            className=" p-2 text-xl shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
