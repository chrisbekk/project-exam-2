export default function Guests({ maxGuests }) {
  const options = [];
  for (let i = 0; i < maxGuests; i++) {
    const option = i + 1;
    options.push(option);
  }
  const handleChange = e => {
    console.log(e.target.value);
  };
  console.log(options);
  return (
    <div>
      <form>
        <label htmlFor="addGuests" className="block text-sm font-semibold">
          Add Guests
        </label>
        <select name="guests" id="addGuests" onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
