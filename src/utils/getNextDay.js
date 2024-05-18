export default function getNextDay(startDate) {
  const today = new Date(startDate);
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const year = nextDay.getFullYear();
  const month = String(nextDay.getMonth() + 1).padStart(2, '0');
  const day = String(nextDay.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
