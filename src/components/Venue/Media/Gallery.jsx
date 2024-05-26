import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../generics/Button';
//
export const Gallery = ({ isVisible, setIsVisible, gallery }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!isVisible) return;
  console.log(isVisible);
  return createPortal(
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-50">
      <div className="mt-10 h-full max-h-[768px] w-full max-w-[768px]">
        <div className="max-h-[560px] w-full">
          <img
            src={gallery[currentImage]?.url}
            alt={gallery[currentImage]?.alt}
            className="aspect-video h-full w-full object-cover sm:rounded-md"
          />
        </div>
        <div className=" mx-auto grid max-w-[420px] grid-cols-6  gap-1  pt-10">
          {gallery.map((image, index) => {
            return (
              <div
                key={index}
                role="button"
                onClick={() => setCurrentImage(index)}
                className={`${index === currentImage ? 'opacity-100' : 'opacity-60'} min-h-full rounded-md`}
              >
                <img
                  src={image?.url}
                  alt={image?.alt}
                  className="aspect-square rounded-md object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="mt-10 w-full px-4 xs:mx-auto xs:max-w-[340px] xs:px-0">
          <Button handleClick={() => setIsVisible(false)}>Close</Button>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
