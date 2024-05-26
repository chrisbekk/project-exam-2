import { useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export default function FilterVenues({ setDestination }) {
  const destinationRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(destinationRef.current.value);
    setDestination(destinationRef.current.value);
    destinationRef.current.value = '';
  };

  return (
    <div className=" max-w-[764px] rounded-md sm:rounded-3xl sm:bg-white sm:p-10 sm:shadow-lg md:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <label
            htmlFor="destination"
            className="absolute left-1 top-1 text-xs font-bold"
          >
            Destination
          </label>
          <input
            id="destination"
            type="text"
            ref={destinationRef}
            className="h-14 w-full rounded-l-xl rounded-r-full bg-white pb-4 pl-4 pt-5 shadow-md"
          />
          <button
            type="button"
            aria-label="filter"
            className="absolute right-0 top-0 flex size-14 items-center justify-center rounded-full bg-brand shadow-lg drop-shadow-md transition-all hover:bg-rose-600"
          >
            <HiOutlineSearch className="text-2xl text-neutral-50" />
          </button>
        </div>
      </form>
    </div>
  );
}
