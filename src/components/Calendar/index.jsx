import { CgChevronLeftR, CgChevronRightR } from 'react-icons/cg';
import {
  endOfMonth,
  format,
  getDaysInMonth,
  startOfMonth,
  addMonths,
  subMonths,
  addDays,
  endOfWeek,
  startOfWeek,
  isSameDay,
  isWithinInterval,
  parseISO,
} from 'date-fns';
import React, { useState } from 'react';

const Calendar = ({ bookings }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dateFormat = 'yyyy-MM-dd';

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
        <button onClick={prevMonth}>
          <CgChevronLeftR className="size-8 " />
        </button>
        <div className="flex flex-col items-center justify-center">
          <h1>{format(currentMonth, 'yyyy')}</h1>
          <h2>{format(currentMonth, 'MMM')}</h2>
        </div>
        <button onClick={nextMonth}>
          <CgChevronRightR className="size-8" />
        </button>
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-1 rounded-xl p-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`${isSameDay(day, new Date()) ? 'border border-black bg-blue-100' : ''} ${isDateInBooking(day) ? 'bg-neutral-300' : ''} flex w-full flex-col justify-between rounded-xl border p-2 lg:size-20`}
          >
            <div>
              <p
                className={
                  format(day, 'EEE') === 'Sun'
                    ? 'text-sm text-red-500'
                    : 'text-sm text-neutral-400'
                }
              >
                {format(day, 'EEE')}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end lg:pr-3">
              <p className="text-xs ">
                <span className="hidden lg:inline">{format(day, 'MMM')}</span>
                <span className="text-xs font-bold lg:text-sm">
                  {format(day, 'dd')}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
