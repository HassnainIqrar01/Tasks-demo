import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalContentRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
    setContent: (content) => {
      modalContentRef.current.innerHTML = content;
    }
  }));

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" ref={modalContentRef}></div>
    </div>
  );
});

export default Modal;
