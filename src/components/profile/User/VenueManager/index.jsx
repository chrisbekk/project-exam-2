import React, { useState } from 'react';
import { Register } from './Register';

export const VenueManager = ({
  venueManager,
  loading,
  error,
  registerVenueManager,
}) => {
  console.log(venueManager);
  if (!venueManager)
    return (
      <Register
        pending={loading}
        error={error}
        registerVenueManager={registerVenueManager}
      />
    );
  return <div>VenueManager This is the page for a venue Manager</div>;
};
