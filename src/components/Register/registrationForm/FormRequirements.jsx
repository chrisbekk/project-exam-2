import React from 'react';
import { MdCheck } from 'react-icons/md';
import { MdErrorOutline } from 'react-icons/md';

export const FormRequirements = ({ requirements }) => {
  return (
    <div className="mb-7">
      {requirements.map((req, index) => (
        <div key={index} className="flex gap-2 mb-4">
          {req.isValid ? (
            <MdCheck className="shrink-0 text-emerald-700" />
          ) : (
            <MdErrorOutline className="shrink-0" />
          )}
          <p
            className={`text-xs ${req.isValid ? 'text-neutral-950' : 'text-neutral-400'}`}
          >
            {req.text}
          </p>
        </div>
      ))}
    </div>
  );
};
