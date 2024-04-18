import { Link } from 'react-router-dom';

import React from 'react';
import { useAuthContext } from '../context/authContext';
import { Hero } from '../components/hero';
export const Home = () => {
  const context = useAuthContext();
  console.log(context);
  return (
    <>
      <Hero />
    </>
  );
};
