import React, { useEffect } from 'react';
import { Pending } from '../../Pending';
import { Bookings } from './Bookings';
import useFetchUser from '../../../hooks/useFetchUser';
import { VenueManager } from './VenueManager';
import { useRegisterVenueManager } from '../../../hooks/useRegisterVenueManager';
export const User = ({ userData, apiKey }) => {
  const {
    data,
    pending: loading,
    error,
    registerVenueManager,
  } = useRegisterVenueManager();

  if (pending) return <Pending>Fetching User</Pending>;
  if (responseError) return <p>Error</p>;
  return (
    <div className="w-full ">
      <VenueManager
        venueManager={responseData?.data.venueManager}
        loading={loading}
        error={error}
        registerVenueManager={registerVenueManager}
      />
      <Bookings bookings={responseData?.data.bookings} />
    </div>
  );
};
