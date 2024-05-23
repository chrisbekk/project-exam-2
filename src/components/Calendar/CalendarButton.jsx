import React from 'react';
import {
  isSameDay,
  format,
  addDays,
  eachDayOfInterval,
  isWithinInterval,
  parseISO,
  isBefore,
} from 'date-fns';

const CalendarButton = ({
  day,
  index,
  isDateInBooking,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) => {
  const today = new Date();
  const isToday = isSameDay(day, today);

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

  if (isBooked) {
    buttonClassNames += ' bg-rose-100'; // Example color for booked dates
  } else if (isToday) {
    buttonClassNames += ' border border-black bg-blue-100';
  } else if (!isToday && isBefore(day, today)) {
    buttonClassNames += ' bg-neutral-200'; // Example color for past dates
  } else if (isFromDate) {
    buttonClassNames += ' bg-green-400'; // Highlight fromDate with a darker shade of green
  } else if (isToDate) {
    buttonClassNames += ' bg-green-200'; // Highlight toDate with a lighter shade of green
  } else if (isBetweenDates) {
    buttonClassNames += ' bg-green-100'; // Highlight dates between fromDate and toDate with the lightest shade of green
  }

  const handleBooking = selectedDay => {
    // Handle deselection of fromDate if it's already selected
    if (isSameDay(selectedDay, fromDate)) {
      setFromDate(null);
      return;
    }

    // Handle deselection of toDate if it's already selected
    if (isSameDay(selectedDay, toDate)) {
      setToDate(null);
      return;
    }

    // Handle the booking
    if (!fromDate) {
      setFromDate(selectedDay);
      setToDate(null);
    } else if (!toDate) {
      // Check if the selected day is after fromDate
      if (isBefore(selectedDay, fromDate)) {
        alert('Please select a date after the check-in date.');
        return;
      }

      // Create an array of dates between fromDate and the selected day
      const selectedDates = eachDayOfInterval({
        start: fromDate,
        end: selectedDay,
      });

      // Check if any of the selected dates are already booked
      const isBookedBetween = selectedDates.some(date => isDateInBooking(date));

      if (isBookedBetween) {
        alert(
          'There are booked dates between the selected dates. Please choose different dates.',
        );
        return;
      }

      setToDate(selectedDay);
    } else {
      setFromDate(selectedDay);
      setToDate(null);
    }
  };

  return (
    <button
      onClick={() => handleBooking(day)}
      disabled={isBooked || (!isToday && isBefore(day, today))}
      className={buttonClassNames}
    >
      {' '}
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
        <p className="text-xs">
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
