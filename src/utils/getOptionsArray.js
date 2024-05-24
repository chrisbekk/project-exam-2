export default function getOptionsArray(maxGuests) {
  const options = [];
  for (let i = 0; i < maxGuests; i++) {
    const option = i + 1;
    options.push(option);
  }

  return options;
}
