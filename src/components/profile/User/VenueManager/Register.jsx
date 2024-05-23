import React from 'react';
import { Button } from '../../../Button';
import { Error } from './Error';
import { Pending } from '../../../Pending';
import { useRegisterVenueManager } from '../../../../hooks/useRegisterVenueManager';
import { useAuthContext } from '../../../../context/authContext';
export const Register = () => {
  const {
    responseData,
    pending,
    responseError,
    setResponseError,
    registerVenueManager,
  } = useRegisterVenueManager();
  const { user, apiKey } = useAuthContext();
  const handleClick = () => {
    const payload = { venueManager: true };
    setResponseError(true);
  };
  if (responseError) return <Error setResponseError={setResponseError} />;
  if (pending) return <Pending />;
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
        <Button small={true} fill={true} handleClick={handleClick}>
          Register As Venue Manager
        </Button>
      </div>
    </div>
  );
};
