export default function calculateNightsBooked(checkInDate, checkOutDate) {
  if (!checkInDate || !checkOutDate) return;
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const differenceInTime = checkOut - checkIn;

  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
}
