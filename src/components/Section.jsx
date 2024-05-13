import React from 'react';

export const Section = ({ children, ySpace = true }) => {
  return (
    <section className={`${ySpace ? 'my-5 py-16' : 'my-0 py-0'} px-2 `}>
      {children}
    </section>
  );
};
