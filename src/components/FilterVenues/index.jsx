import { useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { GrMoney } from 'react-icons/gr';
import { HiStar } from 'react-icons/hi';
export default function FilterVenues({ filter, setFilter, setDestination }) {
  const destinationRef = useRef(null);
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
  const handleReset = () => {
    setFilter(null);
    setDestination('');
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

// import React, { useState, useEffect, useRef } from 'react';
// import { HiOutlineSearch } from 'react-icons/hi';
// import { Modal } from '../modal';
// import { Calendar } from '../Calendar';
// import { AddGuests } from '../AddGuests';

// //TODO: Change the input elements so that they are not controlled by state.
// //TODO: User inputs should not trigger rerendering, only user clicking search button.
// //TODO: Input value not default set to states from search form

// export const FilterVenues = ({
//   setDestination,
//   setFromDate,
//   setToDate,
//   setGuests,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isActive, setIsActive] = useState('');
//   const containerRef = useRef(null);

//   // Declare states for rendering component value
//   const [destinationInput, setDestinationInput] = useState('');
//   const [fromDateInput, setFromDateInput] = useState('');
//   const [toDateInput, setToDateInput] = useState('');
//   const [guestsInput, setGuestsInput] = useState('');

//   const handleActive = e => {
//     setIsActive(e.target.id);
//   };

//   const handleToggleModal = () => {
//     setIsOpen(true);
//   };

//   const handleFilterVenues = () => {
//     setDestination(destinationInput);
//     setFromDate(fromDateInput);
//     setToDate(toDateInput);
//     setGuests(guestsInput);
//     setIsActive('');
//   };

//   useEffect(() => {
//     const handleClickOutside = e => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setIsActive('');
//       }
//     };

//     window.addEventListener('click', handleClickOutside);

//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="container h-20 rounded-full bg-neutral-100 p-[0.5px] shadow-lg xs:relative xs:grid xs:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]"
//       >
//         <button
//           type="text"
//           id="destination"
//           onClick={handleToggleModal}
//           className={`${isActive === 'destination' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black h-full w-full rounded-l-full transition-colors xs:hidden `}
//         ></button>
//         <button
//           onClick={handleActive}
//           className="relative hidden h-full w-full rounded-l-full  transition-colors xs:block"
//         >
//           <label
//             htmlFor="destination"
//             className="absolute left-6 top-4 z-10 text-xs font-bold"
//           >
//             Where
//           </label>
//           <input
//             id="destination"
//             value={destinationInput}
//             onChange={e => setDestinationInput(e.target.value)}
//             placeholder="Search for destinations"
//             type="text"
//             className={`${isActive === 'destination' ? 'rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'}  absolute inset-0 h-full w-full rounded-l-full pl-6 pt-2 text-sm font-light focus:outline-none`}
//           />
//         </button>
//         <div
//           type="text"
//           id="fromDate"
//           onClick={handleActive}
//           className={`${isActive === 'fromDate' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black relative hidden h-full w-full rounded-l-full transition-colors xs:block `}
//         >
//           <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
//             Check In
//           </p>
//           <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
//             {fromDateInput === '' ? 'Add date' : fromDateInput.substring(0, 10)}
//           </p>
//           <div
//             className={`absolute ${isActive === 'fromDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%] z-50`}
//           >
//             <Calendar handleChange={setFromDateInput} />
//           </div>
//         </div>
//         <div
//           type="text"
//           id="toDate"
//           onClick={handleActive}
//           className={`${isActive === 'toDate' ? ' rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} text-color-black relative hidden h-full w-full rounded-l-full transition-colors xs:block `}
//         >
//           <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
//             Check Out
//           </p>
//           <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
//             {toDateInput === '' ? 'Add date' : toDateInput.substring(0, 10)}
//           </p>
//           <div
//             className={`absolute ${isActive === 'toDate' ? 'block' : 'hidden'} -bottom-[535%] -left-[100%]`}
//           >
//             <Calendar handleChange={setToDateInput} />
//           </div>
//         </div>
//         <div
//           id="guests"
//           onClick={handleActive}
//           className={`${isActive === 'guests' ? 'rounded-full bg-white drop-shadow-xl' : 'bg-neutral-100'} relative hidden h-full w-full rounded-r-full transition-colors xs:block `}
//         >
//           <p className="pointer-events-none absolute left-6 top-4 text-xs font-bold">
//             Guests
//           </p>
//           <p className="pointer-events-none absolute left-6 top-9 text-xs font-thin">
//             {guestsInput == 0
//               ? 'Add guests'
//               : guestsInput === 1
//                 ? guestsInput + ' guest'
//                 : guestsInput + ' guests'}
//           </p>
//           <div
//             className={`absolute ${isActive === 'guests' ? 'block' : 'hidden'} -bottom-[705%] right-0`}
//           >
//             <AddGuests setGuests={setGuestsInput} />
//           </div>
//         </div>

//         <button
//           onClick={handleFilterVenues}
//           className="absolute right-3 top-10 flex size-14 translate-y-[-50%] transform items-center justify-center rounded-full bg-brand"
//         >
//           <HiOutlineSearch className="text-white" />
//         </button>
//       </div>
//       <Modal
//         isOpen={isOpen}
//         fullscreen={true}
//         closeModal={() => setIsOpen(false)}
//       ></Modal>
//     </>
//   );
// };
