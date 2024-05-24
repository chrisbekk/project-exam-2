import React, { useEffect } from 'react';
import { Pending } from '../../Pending';
import { Bookings } from './Bookings';

import { VenueManager } from './VenueManager';
import { useRegisterVenueManager } from '../../../hooks/useRegisterVenueManager';
export const User = ({ userData, apiKey }) => {
  const { responseData, pending, error, registerVenueManager } =
    useRegisterVenueManager();

  if (pending) return <Pending>Fetching User</Pending>;
  if (error) return <p>Error</p>;
  return (
    <div className="w-full ">
      <VenueManager venueManager={userData.venueManager} />
      <Bookings bookings={userData.bookings} />
    </div>
  );
};
