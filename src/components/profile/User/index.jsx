import React, { useEffect } from 'react';
import { Pending } from '../../Pending';
import { Bookings } from './Bookings';
import useFetchUser from '../../../hooks/useFetchUser';
import { VenueManager } from './VenueManager';
export const User = ({ userData, apiKey }) => {
  const { responseData, pending, responseError, fetchUser } = useFetchUser();
  console.log(userData);
  console.log(apiKey);
  console.log(responseData);
  useEffect(() => {
    fetchUser(userData.name, userData.accessToken, apiKey);
  }, []);

  if (pending) return <Pending>Fetching User</Pending>;
  if (responseError) return <p>Error</p>;
  return (
    <div className="w-full ">
      <VenueManager venueManager={responseData?.data.venueManager} />
      <Bookings bookings={responseData?.data.bookings} />
    </div>
  );
};
