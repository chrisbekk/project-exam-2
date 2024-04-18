import { Link } from 'react-router-dom';
import React from 'react';
import { RegistrationForm } from '../components/registrationForm';

export const Register = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full sm:bg-white sm:max-w-[850px] sm:p-10 sm:shadow-lg sm:rounded-xl">
        <h1 className="text-center text-2xl font-semibold mb-8">
          User Registration
        </h1>
        <RegistrationForm />
        <Link to={'/signin'} className="text-xs block text-center mt-8">
          Already have a Holidaze account?{' '}
          <span className="font-semibold">Click here to sign in.</span>
        </Link>
      </div>
    </div>
  );
};
