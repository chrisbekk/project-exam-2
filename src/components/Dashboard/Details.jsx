import React from 'react';
import { useUserContext } from '../../context/userContext';
//
export const Details = ({ venues }) => {
  const { user } = useUserContext();

  return (
    <div className="p-2 xs:rounded-xl xs:border xs:border-neutral-300 xs:shadow-xl">
      <h2 className="text-xl font-semibold">Details</h2>
      <div>
        <p>{user.name}</p>

        <p>Total venues: {venues?.length}</p>
      </div>
    </div>
  );
};
