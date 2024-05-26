export const Guests = ({ maxGuests, guests, setGuests }) => {
  const handleChange = e => {
    const selectedGuests = parseInt(e.target.value, 10);
    setGuests(selectedGuests);
  };

  const guestOptions = [];
  for (let i = 1; i <= maxGuests; i++) {
    let guestString = 'guests';
    if (i === 1) {
      guestString = 'guest';
    }
    guestOptions.push(
      <option key={i} value={i} className="">
        {i} {guestString}
      </option>,
    );
  }

  return (
    <div>
      <h2 className="mb-2 mt-10 text-lg font-semibold xs:text-xl">
        How many guests are you bringing?
      </h2>
      <label htmlFor="guests" className="mb-2 block text-lg">
        Guests:
      </label>
      <select
        id="guests"
        onChange={handleChange}
        className="w-full max-w-96 rounded-lg border border-neutral-300 p-3 shadow-lg"
      >
        <option value="0">Add Guests</option>
        {guestOptions}
      </select>
    </div>
  );
};
