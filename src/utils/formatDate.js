export default function formatDate(date) {
  if (!date) return '';
  const dateStringFormatted = date.toDateString();
  return dateStringFormatted;
}
