import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';

export const ProductGallery = ({ media }) => {
  const gallerySize = media.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeLeft = e => {
    e.stopPropagation();
    if (currentIndex === 0) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };
  const swipeRight = e => {
    e.stopPropagation();
    if (currentIndex === gallerySize - 1) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };
  return (
    <div className="group h-[300px] w-[280px]">
      <div className={`relative flex h-full w-full overflow-hidden`}>
        {gallerySize > 1 && (
          <div className="absolute  inset-0 z-40 hidden items-center justify-between px-2 transition-all group-hover:flex">
            <div
              onClick={e => swipeLeft(e)}
              className="flex size-10 items-center justify-center rounded-full bg-neutral-100 shadow-lg md:size-14"
            >
              <GoChevronLeft className="text-lg" />
            </div>
            <div
              onClick={e => swipeRight(e)}
              className="flex size-10 items-center justify-center rounded-full bg-neutral-100 shadow-lg md:size-14"
            >
              <GoChevronRight className="text-lg" />
            </div>
          </div>
        )}

        <img
          key={currentIndex}
          src={media[currentIndex]?.url}
          alt={
            media[currentIndex]?.alt !== 'string' ||
            media[currentIndex]?.alt !== ''
              ? 'Image of the venue'
              : media[currentIndex]?.alt
          }
          className="h-full w-full rounded-xl object-cover"
        />

        {gallerySize > 1 && (
          <div className="absolute bottom-10 left-[50%] flex translate-x-[-50%] transform gap-2">
            {media.map((image, index) => (
              <div
                key={index}
                className={`size-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-neutral-300'} `}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
