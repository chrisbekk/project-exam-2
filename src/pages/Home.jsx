import { Link } from 'react-router-dom';

import React from 'react';

import { useAuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { useFetchVenues } from '../context/useFetchVenues';
import { Hero } from '../components/hero';
import { Section } from '../components/Section';

import { Banner } from '../components/banner';
import { Button } from '../components/Button';
import { CardCarousel } from '../components/CardCarousel';
export const Home = () => {
  const context = useAuthContext();
  console.log(context);
  const navigate = useNavigate();
  const { venues, error, pending } = useFetchVenues();

  const handleClick = () => {
    if (!context.data) return;
    navigate('/auth/dashboard');
  };

  return (
    <>
      <Hero />
      <Section>
        <CardCarousel venues={venues} error={error} pending={pending} />
      </Section>
      <Section>
        <h1 className="text-xl font-semibold sm:text-2xl">
          Ready to turn your home into a holiday haven?
        </h1>
        <div className="relative">
          <Banner />
          <div className="absolute top-[50%] w-full translate-y-[-50%] transform bg-white px-8 py-4 sm:left-[50%] sm:max-w-[570px]  sm:translate-x-[-50%] sm:rounded-xl sm:px-20 sm:py-10 sm:shadow-xl">
            <p className="mb-4 text-sm  leading-4 tracking-wide sm:text-base">
              Join Holidaze and unlock the potential of your property! Whether
              it's a cozy cabin nestled in the mountains or a seaside retreat,
              we connect you with guests eager to experience your unique space.
            </p>
            <p className="mb-10 text-sm leading-4 tracking-wide sm:text-base">
              Start earning extra income and share the magic of your home with
              travelers worldwide!
            </p>
            <Button handleClick={handleClick}>Get Started With Holidaze</Button>
          </div>
        </div>
      </Section>
    </>
  );
};
