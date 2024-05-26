import { createPortal } from 'react-dom';
import { Calendar } from '../../Calendar';
import React from 'react';

export const BookingModal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return;

  return createPortal(
    <div className="absolute inset-0 z-50 overscroll-none border-2 border-red-400 bg-white p-10">
      <h1 className="text-xl">Add Check In Date</h1>
      <div>
        <Calendar />
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
