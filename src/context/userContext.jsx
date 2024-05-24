import { createContext, useContext, useState } from 'react';
import { signInUser } from '../api/signInUser';
import { createApiKey } from '../api/createApiKey';
import { getUser } from '../api/getUser';
const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const signIn = async userCredentials => {
    try {
      setLoading(true);
      setError(false);
      const signInResponse = await signInUser(userCredentials);
      setAccessToken(signInResponse.accessToken);
      const apiKeyResponse = await createApiKey(signInResponse.accessToken);
      setApiKey(apiKeyResponse.key);
      const userResponse = await getUser(
        signInResponse.name,
        signInResponse.accessToken,
        apiKeyResponse.key,
      );

      setUser(userResponse);
    } catch (error) {
      console.log(error);
      setError(error.data.errors);
    } finally {
      setLoading(false);
    }
  };
  const signOut = () => {
    setUser(null);
    setApiKey(null);
    setAccessToken(null);
  };
  const contextValue = {
    signIn,
    user,
    setUser,
    error,
    loading,
    apiKey,
    accessToken,
    signOut,
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('context not provided');
  }
  return context;
};

// import { createContext, useContext, useEffect, useState } from 'react';
// import { useAuthContext } from './authContext';
// import createApiKey from '../api/createApiKey';
// import fetchUser from '../hooks/useFetchUser';

// const userContext = createContext();

// export function UserProvider({ children }) {
//   const { signInData } = useAuthContext();
//   const [apiKey, setApiKey] = useState(null);
//   const [userData, setUserData] = useState(null);
//   const [userError, setUserError] = useState(false);
//   const [loading, setLoading] = useState(false); // Initially not loading

//   useEffect(() => {
//     const createUserData = async () => {
//       if (signInData) {
//         setUserError(false);
//         const { name, accessToken } = signInData;
//         try {
//           setLoading(true); // Start loading
//           const { key } = await createApiKey(accessToken);
//           setApiKey(key);
//           const { data } = await fetchUser(name, accessToken, key);
//           setUserData(data);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//           setUserError(true);
//         } finally {
//           setLoading(false); // End loading
//         }
//       } else {
//         setLoading(false); // If no signInData, end loading
//       }
//     };
//     createUserData();
//   }, [signInData]);

//   const signOut = () => {
//     setApiKey(null);
//     setUserData(null);
//   };

//   const user = {
//     apiKey,
//     userData,
//     userError,
//     loading, // Add loading to context
//     signOut,
//   };

//   return <userContext.Provider value={user}>{children}</userContext.Provider>;
// }

// export function useUserContext() {
//   const context = useContext(userContext);

//   if (context === undefined) {
//     throw new Error('context not provided');
//   }
//   return context;
// }
