import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';
import { useAuthContext } from '../../context/authContext';
import React from 'react';

export const Profile = () => {
  const { data } = useAuthContext();
  console.log(data);
  return (
    <>
      <Section ySpace={false}>
        <h1>Profile Page</h1>
      </Section>
    </>
  );
};
