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
import { useGetVenuesByProfile } from '../../hooks/useGetVenuesByProfile';
export const DashboardPage = () => {
  const { user, accessToken, apiKey } = useUserContext();
  console.log(user);
  const { venues, setVenues, pending, responseError, getVenuesByProfile } =
    useGetVenuesByProfile();

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    getVenuesByProfile(user.name, accessToken, apiKey);
  }, []);

  if (pending) return <Pending text={'Loading data...'} />;
  if (responseError)
    return (
      <Error
        text={'Failed to get venues'}
        path={'/auth/profile'}
        redirectTo={'Back to Profile Page'}
      />
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
        <Venues venues={venues} setVenues={setVenues} />
      </Section>
    </>
  );
};
