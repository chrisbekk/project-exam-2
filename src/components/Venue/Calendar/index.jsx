import { CgChevronLeftR, CgChevronRightR } from 'react-icons/cg';
import {
  endOfMonth,
  format,
  startOfMonth,
  addMonths,
  subMonths,
  addDays,
  isWithinInterval,
  parseISO,
} from 'date-fns';
import React, { useState } from 'react';
import CalendarButton from './CalendarButton';

const Calendar = ({ bookings, fromDate, toDate, setFromDate, setToDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  let startDay = startOfMonth(currentMonth);
  const endDay = endOfMonth(currentMonth);
  const days = [];

  while (startDay <= endDay) {
    days.push(startDay);
    startDay = addDays(startDay, 1);
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const isDateInBooking = date => {
    return bookings.some(booking =>
      isWithinInterval(date, {
        start: parseISO(booking.dateFrom),
        end: parseISO(booking.dateTo),
      }),
    );
  };

  return (
    <div>
      <div className="mb-4 flex w-full justify-center gap-10">
        <button aria-label="Previous Month" onClick={prevMonth}>
          <CgChevronLeftR className="size-8 " />
        </button>
        <div className="flex flex-col items-center justify-center">
          <h1>{format(currentMonth, 'yyyy')}</h1>
          <h2>{format(currentMonth, 'MMM')}</h2>
        </div>
        <button aria-label="Next Month" onClick={nextMonth}>
          <CgChevronRightR className="size-8" />
        </button>
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-1 rounded-xl p-1">
        {days.map((day, index) => (
          <CalendarButton
            day={day}
            key={index}
            index={index}
            isDateInBooking={isDateInBooking}
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            bookedDates={bookings}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
