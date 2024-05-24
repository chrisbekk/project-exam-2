import { Bookings } from './Bookings';

import { VenueManager } from './VenueManager';

export const User = ({ user }) => {
  return (
    <div className="w-full ">
      <VenueManager venueManager={user.venueManager} />
      <Bookings bookings={user.bookings} />
    </div>
  );
};
