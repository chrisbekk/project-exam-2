import React from 'react';
import { HiOutlineWifi } from 'react-icons/hi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import { MetaDetailsCard } from './MetaDetailsCard';

export const MetaDetails = ({ meta }) => {
  const { wifi, parking, breakfast, pets } = meta;

  return (
    <div className="mb-12">
      <h2 className="hidden text-xl font-semibold sm:my-10 sm:block">
        This Venue Offers:
      </h2>
      <div className="sm:grid sm:grid-cols-3 sm:gap-8 md:grid-cols-2 lg:max-w-[480px]">
        {wifi && (
          <MetaDetailsCard text={'Free Wifi'}>
            <HiOutlineWifi />
          </MetaDetailsCard>
        )}
        {parking && (
          <MetaDetailsCard text={'Parking Available'}>
            <LuParkingCircle />
          </MetaDetailsCard>
        )}
        {breakfast && (
          <MetaDetailsCard text={'Breakfast Included'}>
            <GiMeal />
          </MetaDetailsCard>
        )}
        {pets && (
          <MetaDetailsCard text={'Pets Allowed'}>
            <MdOutlinePets />
          </MetaDetailsCard>
        )}
      </div>
    </div>
  );
};
