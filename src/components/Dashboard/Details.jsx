import React from 'react';
import { useUserContext } from '../../context/userContext';
export const Details = ({ venues }) => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="p-2 xs:rounded-xl xs:border xs:border-neutral-300 xs:shadow-xl">
      <h2 className="text-xl font-semibold">Details</h2>
      <div>
        <p>{user.name}</p>

        <p>Total venues: {venues?.length}</p>
        <p>Total bookings: TEST</p>
      </div>
    </div>
  );
};
