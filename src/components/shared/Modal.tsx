import { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './Context';

import { ToggleableProps } from './types';

const Modal = () => {
  const context = useContext(Context);

  const closeModal = () => {
    context.setModalOpen!(false);
  }

  return (
    <ModalWrapper
      active={context.modalOpen!}
      onClick={closeModal}
    >
      <ModalContent onClick={e => e.stopPropagation()}>
        {context.modalContent}
        <ExitButton onClick={closeModal}>
          close
        </ExitButton>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div<ToggleableProps>`
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #002b3669;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fdf6e3;
  border-radius: 40px;
  padding: 32px;
`;

const ExitButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 32px;
  font-size: 14px;
  text-decoration: underline;
  user-select: none;
  cursor: pointer;
`;
