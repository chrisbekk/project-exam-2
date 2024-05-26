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
  { url: image1, alt: 'Beatiful house with a fireplace' },
  { url: image2, alt: 'Minimalist house with pool' },
  { url: image3, alt: 'A Ranch style house with green lawn' },
  { url: image4, alt: 'A big house with an even bigger pool' },
  { url: image5, alt: 'A large pool with the sunset in the background' },
  { url: image6, alt: 'Modern villa in the desert.' },
  { url: image7, alt: 'Beatiful beach house overlooking the ocean.' },
  { url: image8, alt: 'Luxurios villa overlooking the sea' },
  { url: image9, alt: 'Modern family style house in the city' },
  { url: image10, alt: 'Minimalist and urban house.' },
];
export const Banner = () => {
  return (
    <div className="z-50 overflow-hidden from-neutral-100 via-transparent to-neutral-100  py-14">
      <div className="mb-8 flex -translate-x-56 gap-2">
        {images.map((image, index) => (
          <img
            src={image.url}
            key={index}
            className="h-[200px]"
            alt={image.alt}
          />
        ))}
      </div>
      <div className="flex -translate-x-[620px] gap-2">
        {images.map((image, index) => (
          <img
            src={image.url}
            key={index}
            className="h-[200px]"
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};
