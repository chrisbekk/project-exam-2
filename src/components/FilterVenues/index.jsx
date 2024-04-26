import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { Modal } from '../modal';
import { Calendar } from '../Calendar';
import { AddGuests } from '../AddGuests';

export const FilterVenues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('');

  const containerRef = useRef(null);

  const handleActive = e => {
    setIsActive(e.target.id);
  };

  const handleToggleModal = () => {
    setIsOpen(true);
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
            Add date
          </p>
          <div
            className={`absolute ${isActive === 'fromDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%]`}
          >
            <Calendar />
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
            Add date
          </p>
          <div
            className={`absolute ${isActive === 'toDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%]`}
          >
            <Calendar />
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
            Add guests
          </p>
          <div
            className={`absolute ${isActive === 'guests' ? 'block' : 'hidden'} -bottom-[602%] right-0`}
          >
            <AddGuests />
          </div>
        </div>

        <button className="absolute right-3 top-10 flex size-14 translate-y-[-50%] transform items-center justify-center rounded-full bg-brand">
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
