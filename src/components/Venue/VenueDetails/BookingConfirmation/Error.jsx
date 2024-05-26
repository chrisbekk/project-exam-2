import { BiMessageSquareError } from 'react-icons/bi';

import { Button } from '../../generics/Button';
import { useNavigate } from 'react-router-dom';
export const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="max-w-[670px] border px-2 py-5 xs:rounded-2xl xs:bg-white xs:p-8 xs:shadow-xl sm:mx-auto">
      <div className="flex w-full flex-col items-center gap-5">
        <BiMessageSquareError className="size-14 text-brand" />
        <h1 className="text-2xl font-semibold">Booking Failed </h1>
      </div>
      <div className="my-6">
        <p className="text-center text-lg">
          We encountered an issue while processing your booking. Please try
          again later.
        </p>
      </div>
      <Button fill={true} handleClick={handleClick}>
        Back to Home page
      </Button>
    </div>
  );
};
