export default function FilterResults({ filteredVenues, destination }) {
  let resultString;
  if (filteredVenues?.length === 0) {
    resultString = (
      <h1 className="font-semibold">No results for "{destination}"</h1>
    );
  } else {
    resultString = (
      <h1 className="border-b border-neutral-500 pb-2 font-semibold">
        Displaying results for "{destination}"
      </h1>
    );
  }

  return resultString;
}
