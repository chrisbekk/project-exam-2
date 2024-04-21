import React, { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';

export const ProductGallery = ({ media }) => {
  const gallerySize = media.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeLeft = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };
  const swipeRight = () => {
    if (currentIndex === gallerySize - 1) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };
  return (
    <div className="group h-[300px] w-full max-w-[300px]">
      <div className={`relative flex h-full w-full overflow-hidden`}>
        {gallerySize > 1 && (
          <div className="absolute  inset-0 z-40 hidden items-center justify-between px-2 transition-all group-hover:flex">
            <div className="flex size-8 items-center justify-center rounded-full bg-neutral-100 shadow-lg">
              <GoChevronLeft className="text-lg" onClick={swipeLeft} />
            </div>
            <div className="flex size-8 items-center justify-center rounded-full bg-neutral-100 shadow-lg">
              <GoChevronRight className="text-lg" onClick={swipeRight} />
            </div>
          </div>
        )}

        {media.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt === 'string' ? 'Image of the venue' : image.alt}
            className="h-full w-full rounded-xl object-cover"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          />
        ))}
        {gallerySize > 1 && (
          <div className="absolute bottom-10 left-[50%] flex translate-x-[-50%] transform gap-2">
            {media.map((image, index) => (
              <div
                key={index}
                className={`size-2 rounded-full ${currentIndex === index ? 'bg-neutral-100' : 'bg-neutral-300'} `}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
