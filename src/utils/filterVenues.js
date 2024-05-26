export default function filterVenuesByDestination(venuesData, name) {
  let filteredVenues = venuesData;
  if (name !== '') {
    filteredVenues = filteredVenues?.filter(
      venue => venue.name.toLowerCase() === name.toLowerCase(),
    );
  }

  return filteredVenues;
}
