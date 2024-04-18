import React from 'react';
import { createPortal } from 'react-dom';
export const Modal = ({
  children,
  fullscreen = false,
  header = true,
  isOpen,
  closeModal,
}) => {
  if (!isOpen) return;

  let modalHeader;

  if (header) {
    modalHeader = (
      <div className="flex justify-end border-b-[0.5px] border-neutral-500 mb-3 py-2">
        <button onClick={closeModal}>Close</button>
      </div>
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-50 bg-neutral-950 bg-opacity-60 flex justify-center items-center">
      <div
        className={`bg-neutral-50 ${fullscreen ? 'h-screen w-screen xs:h-auto xs:w-auto' : ''} rounded-md p-2 w-10/12 max-w-[520px]`}
      >
        {modalHeader}
        {children}
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
