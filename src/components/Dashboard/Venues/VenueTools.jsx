import React, { useState } from 'react';
import { Button } from '../../generics/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { VenueEditor } from './VenueEditor';
import { DeleteVenue } from './DeleteVenue';
import { Link } from 'react-router-dom';
export const VenueTools = ({ venue, setVenues }) => {
  const [toggleEdit, setEditToggle] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  console.log(venue);
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
  return (
    <div className="p-4">
      <div className="border-b border-neutral-200 pb-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl">Edit Venue</h2>
          <p className="">Make changes to this venue.</p>
        </div>
        <Button
          fill={true}
          small={true}
          handleClick={() => setEditToggle(prev => !prev)}
        >
          {toggleEdit ? 'Cancel' : 'Edit Venue'}
        </Button>
      </div>
      <AnimatePresence>
        {toggleEdit && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            exit="hide"
          >
            <VenueEditor
              venue={venue}
              setVenues={setVenues}
              setEditToggle={setEditToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="border-b border-neutral-200 py-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl">Delete Venue</h2>
          <p className="">Need to pull the venue from the market?</p>
        </div>
        <Button
          fill={true}
          small={true}
          handleClick={() => setToggleDelete(prev => !prev)}
        >
          {toggleDelete ? 'Cancel' : 'Delete'}
        </Button>
      </div>
      <AnimatePresence>
        {toggleDelete && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            exit="hide"
          >
            <DeleteVenue venue={venue} setVenues={setVenues} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="border-b border-neutral-200 py-4 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl">View Venue</h2>
          <p className="">Take a look at your venue.</p>
        </div>
        <Link to={`/venue/${venue.id}`} className="underline">
          Venue
        </Link>
      </div>
    </div>
  );
};
