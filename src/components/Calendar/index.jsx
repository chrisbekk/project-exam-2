import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
export default function Calendar({ value, onChange }) {
  return (
    <>
      <div className="hidden sm:block">
        <DatePicker value={value} onChange={newValue => onChange(newValue)} />
      </div>
      <div className="block sm:hidden">
        <MobileDatePicker
          value={value}
          onChange={newValue => onChange(newValue)}
        />
      </div>
    </>
  );
}
