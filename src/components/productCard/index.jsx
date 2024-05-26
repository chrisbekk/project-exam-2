import React from 'react';
import { HiStar } from 'react-icons/hi';
import { ProductGallery } from './ProductGallery';
import { useNavigate } from 'react-router-dom';
export const ProductCard = ({ venue }) => {
  const { description, id, media, name, price, rating } = venue; // Destructuring venue object
  const navigate = useNavigate(); // Declare navigate

  const handleClick = () => {
    navigate(`/venue/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="h-[500px] w-[280px]  flex-shrink-0 flex-grow-0 hover:cursor-pointer"
    >
      <ProductGallery media={media} />
      <div className="h-[200px] pt-4">
        <div className="flex h-[25px] w-full justify-between">
          <p className="w-full overflow-hidden text-base font-semibold">
            {name}
          </p>
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
