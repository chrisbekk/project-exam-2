// Imports
import { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
// *****************************************

export const Calendar = ({ handleChange }) => {
  const [value, setValue] = useState(dayjs());
  const handleDateChange = newValue => {
    e.stopPropagation();
    setValue(newValue);
    handleChange(newValue.$d.toISOString()); // Call the onChange function with the new date value
  };

  // Stop propagation of the click event to prevent it from reaching the parent component
  const handleContainerClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className="z-50 w-max rounded-2xl border bg-white xs:p-10"
      role=""
      onClick={handleContainerClick}
    >
      <DateCalendar value={value} onChange={handleDateChange} />
    </div>
  );
};
