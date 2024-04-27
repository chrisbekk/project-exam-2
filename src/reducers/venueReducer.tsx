interface Venue {
  destination: String;
  fromDate: String;
  toDate: String;
  guests: Number;
}
export const VENUE_DEFAULT_VALUE: Venue = {
  destination: '',
  fromDate: '',
  toDate: '',
  guests: 0,
};
export default function venueReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_VENUES':
      return {
        ...state,
        destination: payload.destination,
        fromDate: payload.fromDate,
        toDate: payload.toDate,
        guests: payload.guests,
      };
  }
}
