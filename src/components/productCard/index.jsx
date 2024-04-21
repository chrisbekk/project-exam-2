import React from 'react';
import { HiStar } from 'react-icons/hi';
import { ProductGallery } from './ProductGallery';
export const ProductCard = ({ venue }) => {
  const { description, id, media, name, price, rating } = venue;

  return (
    <div className="h-[500px] w-full max-w-[304px]  flex-shrink-0 hover:cursor-pointer">
      <ProductGallery media={media} />
      <div className="h-[200px]  pt-4">
        <div className="flex h-[25px] justify-between">
          <p className="text-base font-semibold">{name}</p>
          <div className="flex items-center gap-2">
            <HiStar />

            <p className="text-sm">{rating}</p>
          </div>
        </div>
        <div className="h-[130px] w-full py-2">
          <p className="line-clamp-6 text-sm text-neutral-500">{description}</p>
        </div>
        <div className="">
          <p className="pt-1 text-sm font-bold">
            ${price} <span className="font-normal">per night</span>
          </p>
        </div>
      </div>
    </div>
  );
};
