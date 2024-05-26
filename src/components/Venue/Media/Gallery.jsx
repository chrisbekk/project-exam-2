import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../generics/Button';
export const Gallery = ({ isVisible, setIsVisible, gallery }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!isVisible) return;
  console.log(isVisible);
  return createPortal(
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-[760px] pt-24">
        <div className=" w-full sm:px-6 xl:mx-auto xl:w-[1280px]">
          <img
            src={gallery[currentImage]?.url}
            className="h-full w-full object-contain sm:rounded-md"
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
