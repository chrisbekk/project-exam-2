import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../../generics/Button';
import BookingInformation from './BookingInformation';
import { useNavigate } from 'react-router-dom';
import BookingPrices from './BookingPrices';
import { useUserContext } from '../../../context/userContext';
import usePostBooking from '../../../hooks/usePostBooking';
import { Pending } from '../../generics/Pending';
import { Error } from '../../generics/Error';
import { format } from 'date-fns';
export default function BookingFormMobile({
  price,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  maxGuests,
  totalPrice,
  nights,
  guests,
  setGuests,
  venueId,
}) {
  const [toggleForm, setToggleForm] = useState(false);
  const { user, accessToken, apiKey } = useUserContext();
  const formVariants = {
    initial: { y: '85%' },
    show: { y: '15%', transition: { type: 'ease', delay: 0.15 } },
    exit: { y: '85%', transition: { type: 'ease', delay: 0.2 } },
  };
  const controls = useAnimationControls();
  const navigate = useNavigate();
  const { responseData, pending, responseError, postBooking } =
    usePostBooking();
  let bookingData = {
    dateFrom: null,
    dateTo: null,
    guests: null,
    venueId: null,
  };

  const handleClick = () => {
    if (!toggleForm) {
      controls.start('show');
      setToggleForm(true);
    } else {
      controls.start('exit');
      setToggleForm(false);
    }
  };
  const handleBooking = () => {
    bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: guests,
      venueId: venueId,
    };
    console.log(bookingData);
    if (
      bookingData.dateFrom &&
      bookingData.dateTo &&
      bookingData.guests &&
      bookingData.venueId
    ) {
      postBooking(accessToken, apiKey, bookingData).then(() =>
        navigate('/auth/profile/'),
      );
    }
  };
  if (pending) return <Pending text={'Booking Venue'} />;
  if (responseError)
    return (
      <Error
        text={'Failed to book venue'}
        path={'/venue/'}
        redirectTo={'Back to Venue'}
      />
    );

  return (
    <AnimatePresence>
      <motion.div
        variants={formVariants}
        initial="initial"
        animate={controls}
        exit={controls}
        className="fixed bottom-0 left-0 h-[720px] w-full lg:hidden"
      >
        <motion.div className="relative h-full  border  border-t-[0.5px] bg-neutral-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="flex justify-between px-4 pt-6">
            <button className="text-start" onClick={handleClick}>
              <p className="mb-1 text-sm">
                <span className="font-semibold">${price}</span> per night
              </p>
              <p className="text-sm text-neutral-500">
                {fromDate && toDate
                  ? `${format(fromDate, 'MMM dd')} - ${format(toDate, 'MMM dd')}`
                  : 'Add Dates'}
              </p>
              <p className="text-sm text-neutral-500">
                {guests === 0
                  ? ''
                  : guests == 1
                    ? `${guests} guest`
                    : `${guests} guests`}
              </p>
            </button>
            {user ? (
              <Button fill={true} small={true} handleClick={handleBooking}>
                Reserve
              </Button>
            ) : (
              <Button small={true} handleClick={() => navigate('/signin')}>
                Sign in to Reserve
              </Button>
            )}
          </div>

          <BookingPrices
            totalPrice={totalPrice}
            nights={nights}
            price={price}
          />

          <div className="mt-10">
            <BookingInformation
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              maxGuests={maxGuests}
              guests={guests}
              setGuests={setGuests}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
