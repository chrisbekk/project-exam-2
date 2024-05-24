import React, { useState } from 'react';
import { Button } from '../../../Button';
import { Error } from './Error';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { venueManager } from '../../../../api/venueManager';
import { useUserContext } from '../../../../context/userContext';

export const Register = ({}) => {
  const { user, setUser, accessToken, apiKey } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = () => {
    setLoading(true);
    const payload = { venueManager: true };
    venueManager(user.name, accessToken, apiKey, payload)
      .then(res => setUser(prev => ({ ...prev, venueManager: res })))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };
  if (error) return <Error setError={setError} />;

  return (
    <div className="mx-auto w-full max-w-[720px] rounded-2xl bg-white p-6 shadow-xl md:flex md:p-8">
      <div className="w-full md:max-w-[320px]">
        <h1 className="mb-3 text-xl font-semibold">
          Become a Venue Manager Today!
        </h1>
        <p className="mb-3">
          Join us as a venue manager and start earning by renting out your home
          as a holiday venue.
        </p>
        <p className="mb-6 font-semibold md:mb-0">
          Sign up now and transform your property into a memorable holiday
          destination!
        </p>
      </div>
      <div className="flex w-full justify-center md:items-center ">
        <Button small={!loading} fill={true} handleClick={handleClick}>
          {loading ? (
            <div className="flex w-full items-center">
              <AiOutlineLoading3Quarters className=" w-full animate-spin text-lg font-medium text-white" />
            </div>
          ) : (
            'Register As Venue Manager'
          )}
        </Button>
      </div>
    </div>
  );
};
