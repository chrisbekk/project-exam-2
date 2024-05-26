import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../context/userContext';
import { getVenuesByProfile } from '../../api/getVenuesByProfile';
import { Section } from '../generics/Section';
import { Pending } from '../generics/Pending';
import { Error } from '../generics/Error';
import { CreateVenue } from './CreateVenue';
import { Link } from 'react-router-dom';
import { Details } from './Details';
import { Venues } from './Venues';
export const DashboardPage = () => {
  const { user, accessToken, apiKey } = useUserContext();
  const [venues, setVenues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVenuesByProfile(user.name, accessToken, apiKey)
      .then(res => {
        setError(null);
        setVenues(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Pending text={'Loading data...'} />;
  if (error)
    return (
      <Error>
        <p className="mt-5">Failed to load data</p>
        <p className="mt-2">Please try again later</p>
        <Link to={'/auth/profile'} className="mt-2 bg-brand p-2 text-white">
          Back to Profile Page
        </Link>
      </Error>
    );

  return (
    <>
      <Section limWidth={false} ySpace={false}>
        <div className="mb-5">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Link to={'/auth/profile'}>Profile</Link>
          <Details venues={venues} />
        </div>
      </Section>

      <Section limWidth={false} ySpace={false}>
        <CreateVenue setVenues={setVenues} />
      </Section>
      <Section>
        <Venues
          venues={venues}
          loading={loading}
          error={error}
          setVenues={setVenues}
        />
      </Section>
    </>
  );
};
