import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useGlobalContext from '../../hooks/useGlobalContext';

// TODO: Make modal styling consistent with rest of styles

const ModalBackground = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 35, 70, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 2rem;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 10;
  border: none;
  background-color: #fff;
`;

const CloseModalX = styled.span`
  font-size: 2em;
  display: inline-block;
  transform: rotate(45deg);
`;

export default function Modal(props) {
  const { showModal, closeModal } = useGlobalContext();

  console.log(closeModal);

  const modalRef = useRef();

  const handleCloseModalBackground = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape' && showModal === true) {
      closeModal();
    }
  });

  const handleCloseModal = (e) => {
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      <ModalBackground ref={modalRef} onClick={handleCloseModalBackground}>
        <ModalContainer>
          {props.children}
          <CloseModalButton onClick={handleCloseModal}>
            <CloseModalX>+</CloseModalX>
          </CloseModalButton>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}
