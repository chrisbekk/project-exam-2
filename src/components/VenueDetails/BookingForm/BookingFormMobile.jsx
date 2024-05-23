import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../../Button';
import BookingInformation from './BookingInformation';
import formatDateString from '../../../utils/formatDateString';
import BookingPrices from './BookingPrices';
import { useAuthContext } from '../../../context/authContext';
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
  const { isSignedIn } = useAuthContext();
  const formVariants = {
    initial: { y: '85%' },
    show: { y: '15%', transition: { type: 'ease', delay: 0.15 } },
    exit: { y: '85%', transition: { type: 'ease', delay: 0.2 } },
  };
  const controls = useAnimationControls();
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
    const bookingData = {
      dateFrom: fromDate,
      dateTo: toDate,
      guests: guests,
      venueId: venueId,
    };
    console.log(bookingData);
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={formVariants}
        initial="initial"
        animate={controls}
        exit={controls}
        className="fixed bottom-0 left-0 h-[720px] w-full md:hidden"
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
            <Button
              small={true}
              disabled={!isSignedIn}
              handleClick={handleBooking}
            >
              {isSignedIn ? 'Reserve' : 'Sign In to Reserve'}
            </Button>
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
