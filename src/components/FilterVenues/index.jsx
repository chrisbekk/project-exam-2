import { useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { GrMoney } from 'react-icons/gr';
import { HiStar } from 'react-icons/hi';
export default function FilterVenues({
  filter,
  setFilter,
  metaFilter,
  setMetaFilter,
  setDestination,
}) {
  const destinationRef = useRef(null);
  let metaFiltersArray = [];
  for (let key in metaFilter) {
    if (metaFilter[key]) {
      metaFiltersArray.push(key);
    }
  }

  const handleClick = e => {
    if (filter === e.target.id) {
      setFilter(null);
    } else {
      setFilter(e.target.id);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setDestination(destinationRef.current.value);
    destinationRef.current.value = '';
  };
  const handleMetaFilter = e => {
    for (let key in metaFilter) {
      if (e.target.id === key) {
        setMetaFilter(prevMetaFilter => ({
          ...prevMetaFilter,
          [e.target.id]: !prevMetaFilter[e.target.id],
        }));
      }
    }
  };
  const handleReset = () => {
    setFilter(null);
    setDestination('');
    setMetaFilter({
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    });
    destinationRef.current.value = '';
  };
  console.log(metaFiltersArray);
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
          <button className="absolute right-0 top-0 flex size-14 items-center justify-center rounded-full bg-brand shadow-lg drop-shadow-md transition-all hover:bg-rose-600">
            <HiOutlineSearch className="text-2xl text-neutral-50" />
          </button>
        </div>
      </form>
      <div className="mt-4 flex gap-4 sm:mt-8">
        <button
          id="price"
          onClick={handleClick}
          className={`${filter === 'price' ? 'bg-brand text-white shadow-inner hover:bg-rose-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} rounded-lg p-2 transition-colors`}
        >
          Price
        </button>{' '}
        <button
          id="rating"
          onClick={handleClick}
          className={`${filter === 'rating' ? 'bg-brand text-white shadow-inner hover:bg-rose-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} rounded-lg p-2 transition-colors`}
        >
          Rating
        </button>
        <button
          onClick={handleReset}
          className="size-10 rounded-full bg-brand text-sm text-white transition-colors hover:bg-rose-600"
        >
          X
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          id="wifi"
          onClick={handleMetaFilter}
          className={`${metaFilter.wifi ? 'bg-brand text-white shadow-inner hover:bg-red-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} sm:text-md rounded-xl p-2 text-sm transition-colors`}
        >
          Wifi
        </button>
        <button
          id="parking"
          onClick={handleMetaFilter}
          className={`${metaFilter.parking ? 'bg-brand text-white shadow-inner hover:bg-red-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} sm:text-md rounded-xl p-2 text-sm transition-colors`}
        >
          Parking
        </button>
        <button
          id="breakfast"
          onClick={handleMetaFilter}
          className={`${metaFilter.breakfast ? 'bg-brand text-white shadow-inner hover:bg-red-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} sm:text-md rounded-xl p-2 text-sm transition-colors`}
        >
          Breakfast
        </button>
        <button
          id="pets"
          onClick={handleMetaFilter}
          className={`${metaFilter.pets ? 'bg-brand text-white shadow-inner hover:bg-red-600' : 'bg-neutral-300 text-black hover:bg-neutral-400'} sm:text-md rounded-xl p-2 text-sm transition-colors`}
        >
          Pets
        </button>
      </div>
      {filter && (
        <div className="mt-4">
          {' '}
          <p className="mb-2 text-sm font-semibold">Sorting venues by:</p>
          {filter === 'price' && (
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-brand">
                <GrMoney className=" text-white" />
              </div>{' '}
              <p className="text-sm font-semibold">Venue price: Low - High</p>
            </div>
          )}
          {filter === 'rating' && (
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-brand">
                <HiStar className=" text-white" />
              </div>{' '}
              <p className="text-sm font-semibold">Venue rating: High - Low</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
