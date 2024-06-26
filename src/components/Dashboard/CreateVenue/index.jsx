import React, { useState } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { Button } from '../../generics/Button';
import { Form } from './Form';
import { useUserContext } from '../../../context/userContext';
// {
//   "name": "string", // Required
//   "description": "string", // Required
//   "media": [
//     {
//       "url": "https://url.com/image.jpg",
//       "alt": "string"
//     }
//   ], // Optional
//   "price": 0, // Required
//   "maxGuests": 0, // Required
//   "rating": 0, // Optional (default: 0)
//   "meta": {
//     "wifi": true, // Optional (default: false)
//     "parking": true, // Optional (default: false)
//     "breakfast": true, // Optional (default: false)
//     "pets": true // Optional (default: false)
//   },
//   "location": {
//     "address": "string", // Optional (default: null)
//     "city": "string", // Optional (default: null)
//     "zip": "string", // Optional (default: null)
//     "country": "string", // Optional (default: null)
//     "continent": "string", // Optional (default: null)
//     "lat": 0, // Optional (default: 0)
//     "lng": 0 // Optional (default: 0)
//   }
// }

export const CreateVenue = ({ setVenues }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const { user } = useUserContext();
  let hasVenues = user.venues.length !== 0;

  return (
    <div>
      <div className="mx-auto max-w-80 xs:mx-0">
        <Button fill={true} handleClick={() => setToggleForm(prev => !prev)}>
          <div className="flex items-center justify-center gap-4">
            <MdLibraryAdd className="size-5" />
            {toggleForm ? 'Close' : 'Add Venue'}
          </div>
        </Button>
      </div>
      <Form
        toggleForm={toggleForm}
        setToggleForm={setToggleForm}
        setVenues={setVenues}
      />
    </div>
  );
};
