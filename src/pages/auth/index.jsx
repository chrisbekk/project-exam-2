import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

import React from 'react';

export const AuthRoot = () => {
  const { user, apiKey } = useAuthContext();
  return user && apiKey ? <Outlet /> : <Navigate to={'/'} />;
};
