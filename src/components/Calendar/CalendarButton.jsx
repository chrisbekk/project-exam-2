import React from 'react';
import {
  isBefore,
  isSameDay,
  format,
  addDays,
  eachDayOfInterval,
} from 'date-fns';

const CalendarButton = ({
  day,
  index,
  isDateInBooking,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  bookedDates,
}) => {
  const today = new Date();
  const isToday = isSameDay(day, today);

  // Check if the date is before today
  const isBeforeToday = !isToday && isBefore(day, today);

  // Check if the date is booked
  const isBooked = isDateInBooking(day);

  // Check if the date is the same as fromDate or toDate
  const isFromDate = isSameDay(day, fromDate);
  const isToDate = isSameDay(day, toDate);

  // Check if the date is between fromDate and toDate
  const isBetweenDates =
    fromDate && toDate && isBefore(fromDate, day) && isBefore(day, toDate);

  // Determine the button's class names based on the date checks
  let buttonClassNames =
    'flex w-full flex-col justify-between rounded-xl border p-2 lg:size-20';

  if (isSameDay(day, today)) {
    buttonClassNames += ' border border-black bg-blue-100';
  } else if (isBeforeToday) {
    buttonClassNames += ' bg-neutral-200'; // Example color for past dates
  } else if (isBooked) {
    buttonClassNames += ' bg-rose-100'; // Example color for booked dates
  } else if (isFromDate) {
    buttonClassNames += ' bg-green-400'; // Highlight fromDate with a darker shade of green
  } else if (isToDate) {
    buttonClassNames += ' bg-green-200'; // Highlight toDate with a lighter shade of green
  } else if (isBetweenDates) {
    buttonClassNames += ' bg-green-100'; // Highlight dates between fromDate and toDate with the lightest shade of green
  }

  const handleClick = day => {
    // Deselect fromDate if it's already selected
    if (isSameDay(day, fromDate)) {
      setFromDate(null);
      return;
    }

    // Deselect toDate if it's already selected
    if (isSameDay(day, toDate)) {
      setToDate(null);
      return;
    }

    // Handle booking
    handleBooking(day);
  };

  const handleBooking = selectedDay => {
    // Handle the booking
    if (!fromDate) {
      setFromDate(selectedDay);
      setToDate(null);
    } else if (!toDate) {
      // Check if the selected day is after fromDate
      if (isBefore(selectedDay, fromDate)) {
        alert('Please select a date after fromDate.');
        return;
      }
      setToDate(selectedDay);

      // Check if any dates between fromDate and toDate are booked
      const datesBetween = eachDayOfInterval({
        start: fromDate,
        end: selectedDay,
      });
      const isBooked = datesBetween.some(date => isDateInBooking(date));
      if (isBooked) {
        alert(
          'There are booked dates between fromDate and toDate. Please select other dates.',
        );
        setToDate(null);
        return;
      }

      // Check if the next day after toDate is booked
      // const nextDay = addDays(selectedDay, 1);
      // if (isDateInBooking(nextDay)) {
      //   alert('The next day is already booked.');
      //   setToDate(null);
      // }
    } else {
      // Check if the selected day is the same as fromDate or toDate
      if (isSameDay(selectedDay, fromDate)) {
        setFromDate(null); // Deselect fromDate
        return;
      }
      if (isSameDay(selectedDay, toDate)) {
        setToDate(null); // Deselect toDate
        return;
      }

      // Create an array of dates between fromDate and toDate
      const selectedDates = eachDayOfInterval({ start: fromDate, end: toDate });

      // Check if any of the selected dates are already booked
      const isBooked = selectedDates.some(date => isDateInBooking(date));

      if (isBooked) {
        alert(
          'There are booked dates between fromDate and toDate. Please select other dates.',
        );
        return;
      }

      setFromDate(selectedDay);
      setToDate(null);
    }
  };

  return (
    <button
      onClick={() => handleClick(day)}
      disabled={isBooked || isBeforeToday}
      className={buttonClassNames}
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
        <p>{isBeforeToday && 'true'}</p>
        <p className="text-xs ">
          <span className="hidden lg:inline">{format(day, 'MMM')}</span>
          <span className="text-xs font-bold lg:text-sm">
            {format(day, 'dd')}
          </span>
        </p>
      </div>
    </button>
  );
};

export default CalendarButton;
