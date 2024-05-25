import React, { useState } from 'react';
import { deleteVenue } from '../../../api/deleteVenue';
import { useUserContext } from '../../../context/userContext';
import { Button } from '../../Button';
import { Error } from '../../Error';
import { Pending } from '../../Pending';
import { useNavigate, Link } from 'react-router-dom';

export const DeleteVenue = ({ venue, setVenues }) => {
  const { accessToken, apiKey } = useUserContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(venue.bookings);
  const hasBookings = venue.bookings.length > 0;
  const handleDelete = () => {
    setLoading(true);
    setError(false);
    deleteVenue(venue.id, accessToken, apiKey)
      .then(() => {
        setVenues(prev => {
          const filteredVenues = prev.filter(v => v.id !== venue.id);
          return filteredVenues;
        });
        navigate('/auth/dashboard');
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  if (error)
    return (
      <Error>
        <p className="mt-5">Failed to delete venue</p>
        <p className="mt-2">Please try again later</p>
        <Link to={'/auth/profile'} className="mt-2 bg-brand p-2 text-white">
          Back to Profile Page
        </Link>
      </Error>
    );

  if (loading) return <Pending text={'Deleting venue...'} />;
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h2 className="text-lg font-semibold">
          Are you sure you want to delete the venue?
        </h2>
        {hasBookings && (
          <p className="text-sm font-semibold">
            This venue has active bookings. Still sure you want to delete the
            venue?
          </p>
        )}
      </div>
      <Button fill={true} small={true} handleClick={handleDelete}>
        Delete Venue
      </Button>
    </div>
  );
};
