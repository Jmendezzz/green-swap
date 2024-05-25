import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalContext = createContext();

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

function ModalOpenButton({ children }) {
  const { openModal } = useContext(ModalContext);
  return <button onClick={openModal}>{children}</button>;
}

function ModalCloseButton({ children }) {
  const { closeModal } = useContext(ModalContext);
  return <button onClick={closeModal}>{children}</button>;
}

function ModalContent({ children }) {
  const { isOpen } = useContext(ModalContext);
  return isOpen
    ? ReactDOM.createPortal(
        <ModalOverlay>
          <ModalWrapper>
            {children}
          </ModalWrapper>
        </ModalOverlay>,
        document.body
      )
    : null;
}

Modal.OpenButton = ModalOpenButton;
Modal.CloseButton = ModalCloseButton;
Modal.Content = ModalContent;

export default Modal;