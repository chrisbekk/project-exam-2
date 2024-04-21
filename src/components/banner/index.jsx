import React from 'react';
import image1 from '/01.webp';
import image2 from '/02.webp';
import image3 from '/03.webp';
import image4 from '/04.webp';
import image5 from '/05.webp';
import image6 from '/06.webp';
import image7 from '/07.webp';
import image8 from '/08.webp';
import image9 from '/09.webp';
import image10 from '/10.webp';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];
export const Banner = () => {
  return (
    <div className="z-50 overflow-hidden from-neutral-100 via-transparent to-neutral-100  py-14">
      <div className="animate-bannerLeft mb-8 flex gap-2">
        {images.map((image, index) => (
          <img src={image} key={index} className="h-[200px]" />
        ))}
      </div>
      <div className="animate-bannerRight flex gap-2">
        {images.map((image, index) => (
          <img src={image} key={index} className="h-[200px]" />
        ))}
      </div>
    </div>
  );
};
