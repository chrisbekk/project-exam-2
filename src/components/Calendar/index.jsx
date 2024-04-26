import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const Calendar = ({ value, onChange }) => {
  return (
    <div className=" w-max rounded-2xl border bg-white xs:p-10">
      <DateCalendar value={value} onChange={onChange} />
    </div>
  );
};
