import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Modal } from '../modal';
import { Calendar } from '../Calendar';
import { AddGuests } from '../AddGuests';
import { useSiteContext } from '../../context/venueContext';

export const FilterVenues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('');

  const {
    filter: { venues: state, filterDispatch },
  } = useSiteContext();

  const [destination, setDestination] = useState(state.destination);
  const [fromDate, setFromDate] = useState(state.fromDate);
  const [toDate, setToDate] = useState(state.toDate);
  const [guests, setGuests] = useState(state.guests);
  const containerRef = useRef(null);

  const handleActive = e => {
    console.log(e.target);
    setIsActive(e.target.id);
  };

  const handleToggleModal = () => {
    setIsOpen(true);
  };

  const handleFilterVenues = () => {
    filterDispatch({
      type: 'FILTER_VENUES',
      payload: {
        destination: destination,
        fromDate: fromDate,
        toDate: toDate,
        guests: guests,
      },
    });
    setIsActive('');
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsActive('');
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  console.log(isActive);

  return (
    <>
      <div
        ref={containerRef}
        className="container h-20 rounded-full bg-neutral-100 p-[0.5px] shadow-lg xs:relative xs:grid xs:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]"
      >
        <button
          type="text"
          id="destination"
          onClick={handleToggleModal}
          className={`${isActive === 'destination' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black h-full w-full rounded-l-full transition-colors xs:hidden `}
        ></button>
        <button
          onClick={handleActive}
          className="relative hidden h-full w-full rounded-l-full  transition-colors xs:block"
        >
          <label
            htmlFor="destination"
            className="absolute left-6 top-4 z-10 text-xs font-bold"
          >
            Where
          </label>
          <input
            id="destination"
            value={destination}
            onChange={e => setDestination(e.target.value)}
            placeholder="Search for destinations"
            type="text"
            className={`${isActive === 'destination' ? 'rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'}  absolute inset-0 h-full w-full rounded-l-full pl-6 pt-2 text-sm font-light focus:outline-none`}
          />
        </button>
        <div
          type="text"
          id="fromDate"
          onClick={handleActive}
          className={`${isActive === 'fromDate' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black relative hidden h-full w-full rounded-l-full transition-colors xs:block `}
        >
          <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
            Check In
          </p>
          <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
            {fromDate === '' ? 'Add date' : fromDate.substring(0, 10)}
          </p>
          <div
            className={`absolute ${isActive === 'fromDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%]`}
          >
            <Calendar value={fromDate} handleChange={setFromDate} />
          </div>
        </div>
        <div
          type="text"
          id="toDate"
          onClick={handleActive}
          className={`${isActive === 'toDate' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black relative hidden h-full w-full rounded-l-full transition-colors xs:block `}
        >
          <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
            Check Out
          </p>
          <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
            {toDate === '' ? 'Add date' : toDate.substring(0, 10)}
          </p>
          <div
            className={`absolute ${isActive === 'toDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%]`}
          >
            <Calendar value={fromDate} handleChange={setToDate} />
          </div>
        </div>
        <div
          id="guests"
          onClick={handleActive}
          className={`${isActive === 'guests' ? 'rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} relative hidden h-full w-full rounded-r-full transition-colors xs:block `}
        >
          <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
            Guests
          </p>
          <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
            {guests === 0
              ? 'Add guests'
              : guests === 1
                ? guests + ' guest'
                : guests + ' guests'}
          </p>
          <div
            className={`absolute ${isActive === 'guests' ? 'block' : 'hidden'} -bottom-[705%] right-0`}
          >
            <AddGuests setGuests={setGuests} />
          </div>
        </div>

        <button
          onClick={handleFilterVenues}
          className="absolute right-3 top-10 flex size-14 translate-y-[-50%] transform items-center justify-center rounded-full bg-brand"
        >
          <HiOutlineSearch className="text-white" />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        fullscreen={true}
        closeModal={() => setIsOpen(false)}
      ></Modal>
    </>
  );
};
