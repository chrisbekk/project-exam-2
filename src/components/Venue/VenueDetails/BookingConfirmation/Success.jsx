import React from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { Button } from '../../generics/Button';
import { useNavigate } from 'react-router-dom';
export const Success = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="max-w-[670px] border px-2 py-5 xs:rounded-2xl xs:bg-white xs:p-8 xs:shadow-xl sm:mx-auto">
      <div className="flex w-full flex-col items-center gap-5">
        <GrStatusGood className="size-14 text-brand" />
        <h1 className="text-2xl font-semibold">Booking Confirmed </h1>
      </div>
      <div className="my-6">
        <p className="text-center text-lg">
          Your holiday venue has been successfully booked. We look forward to
          hosting you!
        </p>
        <p className="text-center text-sm">
          You can view your upcoming bookings in the profile section.
        </p>
      </div>
      <Button fill={true} handleClick={handleClick}>
        Back to Home page
      </Button>
    </div>
  );
};
