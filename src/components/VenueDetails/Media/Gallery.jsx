import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { createPortal } from 'react-dom';
export const Gallery = ({ isVisible, setIsVisible, gallery }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!isVisible) return;

  return createPortal(
    <div className="absolute inset-0 flex min-h-screen items-center justify-center bg-neutral-50 bg-opacity-90">
      <div className="max-w-[540px] pt-20">
        <div className="mb-4 flex w-full items-center justify-end">
          <button onClick={() => setIsVisible(false)}>
            <IoCloseCircleOutline />
          </button>
        </div>
        <div className="h-[50vh] ">
          <img
            src={gallery[currentImage]?.url}
            className="h-full object-cover"
          />
        </div>
        <div className=" grid grid-cols-3 gap-1 pt-10">
          {gallery.map((image, index) => {
            return (
              <div
                key={index}
                role="button"
                onClick={() => setCurrentImage(index)}
                className={`${index === currentImage ? 'opacity-100' : 'opacity-60'} rounded-md`}
              >
                <img src={image?.url} className="rounded-md" />
              </div>
            );
          })}
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
