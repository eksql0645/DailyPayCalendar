import React from 'react';
import './Modal.css';

function Modal(props) {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <div className="modal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
