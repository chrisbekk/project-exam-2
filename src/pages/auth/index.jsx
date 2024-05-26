import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { Pending } from '../../components/generics/Pending';
import React from 'react';

export const AuthRoot = () => {
  const { user, loading } = useUserContext();

  if (loading) {
    return <Pending>Setting up Profile Page</Pending>;
  }
  return user ? <Outlet /> : <Navigate to={'/'} />;
};
