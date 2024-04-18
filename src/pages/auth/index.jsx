import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

import React from 'react';

export const AuthRoot = () => {
  const { data } = useAuthContext();
  return data ? <Outlet /> : <Navigate to={'/'} />;
};
