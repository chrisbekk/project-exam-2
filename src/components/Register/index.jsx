import { Link } from 'react-router-dom';
import React from 'react';
import { RegistrationForm } from './registrationForm';

export const Register = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full sm:max-w-[850px] sm:rounded-xl sm:bg-white sm:p-10 sm:shadow-lg">
        <h1 className="mb-8 text-center text-2xl font-semibold">
          User Registration
        </h1>
        <RegistrationForm />
        <Link to={'/signin'} className="mt-8 block text-center text-xs">
          Already have a Holidaze account?{' '}
          <span className="font-semibold">Click here to sign in.</span>
        </Link>
      </div>
    </div>
  );
};
