export default function BookingPrices({ totalPrice, nights, price }) {
  const cleaningFee = 100;
  const holidazeBookingFee = 150;
  const nightString = nights <= 1 ? 'night' : 'nights';
  if (nights === 0) return;
  return (
    <div className="mt-8 px-4">
      <div className="mb-2 flex justify-between">
        <p className="text-sm font-medium underline">
          ${price} x {nights} {nightString}
        </p>
        <p className="text-sm text-neutral-500">${totalPrice}</p>
      </div>
      <div className="mb-2 flex justify-between">
        <p className="text-sm font-medium underline">Cleaning</p>
        <p className="text-sm text-neutral-500">${cleaningFee}</p>
      </div>
      <div className="mb-2 flex justify-between">
        <p className="text-sm font-medium underline">Holidaze booking fee</p>
        <p className="text-sm text-neutral-500">${holidazeBookingFee}</p>
      </div>
      <div className="flex justify-between border-t-[0.5px] border-neutral-300 pt-4">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">
          ${totalPrice + cleaningFee + holidazeBookingFee}
        </p>
      </div>
    </div>
  );
}
