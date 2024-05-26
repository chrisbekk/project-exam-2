import { format } from 'date-fns';
export default function BookingInformation({ fromDate, toDate, guests }) {
  return (
    <div className="mx-auto max-w-[640px]">
      <h1 className="text-lg font-semibold">Your Booking Information</h1>
      <div className="my-8 w-full rounded-lg border-[0.5px] border-neutral-400">
        <div className="flex w-full">
          <div className="flex h-16 w-full flex-col justify-between rounded-tl-lg border p-2">
            <p className="text-sm font-semibold">Check In</p>
            <p className=" font-semibold">
              {fromDate && format(fromDate, 'MMM dd')}
            </p>
          </div>
          <div className="flex h-16 w-full flex-col justify-between rounded-tr-lg border p-2">
            <p className="text-sm font-semibold">Check Out</p>
            <p className="font-semibold">
              {toDate && format(toDate, 'MMM dd')}
            </p>
          </div>
        </div>
        <div className="flex h-16 w-full flex-col justify-between p-2">
          <p className="text-sm font-semibold">Guests</p>
          <p className="font-semibold">{guests}</p>
        </div>
      </div>
    </div>
  );
}
