import React from 'react';

export const Description = ({ description }) => {
  if (description === null || description === 'string')
    return <p>No description available for this venue.</p>;
  return <div>{description}</div>;
};
