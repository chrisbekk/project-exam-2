import React from 'react';
import { useState, useEffect } from 'react';
import { Gallery } from './Gallery';
import { HiOutlineViewGrid } from 'react-icons/hi';

export const Media = ({ mediaArray }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [primaryImage, ...gallery] = mediaArray;
  const mediaArrayLength = gallery.length;
  const renderedGallery = gallery.slice(0, 4);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <div
      className={`relative h-[450px] xl:max-h-[768px] ${mediaArrayLength > 3 ? 'grid-cols-2 gap-2 md:grid' : 'block'} `}
    >
      <div className="h-full w-full ">
        <img
          src={primaryImage?.url}
          alt={primaryImage?.alt}
          className="h-full w-full object-cover sm:rounded-lg"
        />
        <button
          onClick={() => setIsVisible(true)}
          className="absolute bottom-5 right-3 flex items-center gap-2 rounded-md bg-neutral-50 bg-opacity-50 p-3 text-sm hover:bg-opacity-100 hover:transition-opacity md:bottom-5 md:right-4 lg:right-7"
        >
          <HiOutlineViewGrid />
          Gallery
        </button>
      </div>
      {mediaArrayLength > 3 && (
        <div className="hidden min-h-full w-full  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-1">
          {renderedGallery.map((image, index) => {
            return (
              <img
                src={image?.url}
                key={index}
                className="aspect-square h-full w-full object-cover sm:rounded-lg"
              />
            );
          })}
        </div>
      )}
      <Gallery
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        gallery={mediaArray}
      />
    </div>
  );
};
