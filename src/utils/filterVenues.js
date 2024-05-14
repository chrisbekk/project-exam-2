export default function filterVenuesByDestination(venuesData, destination) {
  let filteredVenues = venuesData;
  if (destination !== '') {
    filteredVenues = filteredVenues?.filter(
      venue => venue.location.city?.toLowerCase() === destination.toLowerCase(),
    );
  }

  return filteredVenues;
}
