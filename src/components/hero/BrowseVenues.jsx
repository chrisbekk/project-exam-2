import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
export default function BrowseVenues() {
  let query;
  const destinationRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked');
    query = { destination: destinationRef.current.value };
    const queryString = new URLSearchParams(query).toString();
    navigate(`/venues?${queryString}`);
  };
  return (
    <div className="bg-neutral-50 p-2 shadow-md md:absolute md:bottom-1/2 md:left-0 md:w-[594px] md:translate-x-0 md:translate-y-1/2 md:transform md:rounded-lg md:p-14">
      <h1>
        Search for venues at your preferred destination or explore all venues
      </h1>
      <form>
        <div className="relative mb-7">
          <label
            htmlFor="destination"
            className="absolute left-1 top-1 text-xs font-bold"
          >
            Destination
          </label>
          <input
            type="text"
            ref={destinationRef}
            id="destination"
            className="w-full rounded-lg border-[0.5px] border-neutral-500 bg-neutral-50 pb-[16px] pl-4 pt-[20px] text-sm"
            aria-placeholder="Where"
          />
        </div>
        <Button fill={true} submit={true} handleClick={handleSubmit}>
          Explore Venues
        </Button>
      </form>
    </div>
  );
}
