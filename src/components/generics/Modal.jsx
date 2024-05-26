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
      <div className="mb-3 flex justify-end border-b-[0.5px] border-neutral-500 py-2">
        <button onClick={closeModal}>Close</button>
      </div>
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-60">
      <div
        className={`bg-neutral-50 ${fullscreen ? 'h-screen w-screen xs:h-auto xs:w-auto' : ''} w-10/12 max-w-[520px] rounded-md p-2`}
      >
        {modalHeader}
        {children}
      </div>
    </div>,
    document.getElementById('portal'),
  );
};
