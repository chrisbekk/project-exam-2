import React, { useState } from 'react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookings } from './Bookings';
import { VenueTools } from './VenueTools';

export const Venue = ({ venue, setVenues }) => {
  const [toggle, setToggle] = useState(false);
  const venueLength = venue?.bookings?.length;
  const variants = {
    initial: { scaleY: '0%' },
    show: {
      scaleY: '100%',
      originY: 0,
    },
    hide: {
      scaleY: '0%',
      originY: 0,
      transition: { type: 'ease', duration: 0.15 },
    },
  };
  console.log(venue?.bookings);
  return (
    <div className="mb-2 rounded-xl border border-neutral-300 p-2 transition-all">
      <div
        className="grid grid-cols-3 hover:cursor-pointer sm:grid-cols-5"
        onClick={() => setToggle(prev => !prev)}
      >
        <div>
          <p className="text-sm font-semibold">Name</p>
          <p>{venue?.name}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Bookings</p>
          <p>{venueLength}</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Rating</p>
          <p>{venue?.rating}</p>
        </div>
        <div className="hidden flex-col items-center sm:flex">
          <p className="text-sm font-semibold">Price</p>
          <p>{venue?.price}</p>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold">Last Updated</p>
          <p>{format(venue?.updated, 'MMM dd yyyy')}</p>
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            exit="hide"
            className="mt-2 border-t border-neutral-300"
          >
            <VenueTools venue={venue} setVenues={setVenues} />
            <Bookings bookings={venue?.bookings} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
