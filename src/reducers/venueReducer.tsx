interface Venue {
  destination: String;
  fromDate: String;
  toDate: String;
}
export const VENUE_DEFAULT_VALUE: Venue = {
  destination: '',
  fromDate: '',
  toDate: '',
};
export default function venueReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_VENUE':
      return payload;
      break;
  }
}
