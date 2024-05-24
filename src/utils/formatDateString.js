export default function formatDateString(dateString) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [year, month, day] = dateString.split('-');
  const monthName = monthNames[parseInt(month, 10) - 1];
  return `${monthName} ${day}`;
}
