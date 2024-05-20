import ProfilePage from '../../components/profile';
import { useAuthContext } from '../../context/authContext';
import React, { useEffect, useState } from 'react';

export const Profile = () => {
  const { data } = useAuthContext();
  return <ProfilePage data={data} />;
};
