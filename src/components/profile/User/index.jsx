import { Bookings } from './Bookings';
import { Section } from '../../generics/Section';
import { VenueManager } from './VenueManager';

export const User = ({ user }) => {
  return (
    <div className="w-full ">
      <Section limWidth={true}>
        <VenueManager venueManager={user?.venueManager} />
        <Bookings bookings={user?.bookings} />
      </Section>
    </div>
  );
};
