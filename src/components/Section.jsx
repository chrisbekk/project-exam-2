import React from 'react';

export const Section = ({ children, ySpace = true, limWidth = false }) => {
  return (
    <section
      className={`${ySpace ? 'my-5 py-16' : 'my-0 py-0'} ${limWidth ? 'mx-auto max-w-[1024px]' : ''} px-2 `}
    >
      {children}
    </section>
  );
};
