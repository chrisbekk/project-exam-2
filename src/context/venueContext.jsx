import { createContext, useContext, useReducer } from 'react';
import venueReducer, { VENUE_DEFAULT_VALUE } from '../reducers/venueReducer';
const context = createContext();

export default function ContextProvider({ children }) {
  const [venueFilter, filterDispatch] = useReducer(
    venueReducer,
    VENUE_DEFAULT_VALUE,
  );

  const contextValue = {
    venueFilter: { venueFilter, filterDispatch },
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useSiteContext() {
  const contextValues = useContext(context);

  if (contextValues === undefined) {
    throw new Error('Missing context');
  }
  return contextValues;
}
