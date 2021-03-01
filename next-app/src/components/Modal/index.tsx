import React, {
  ComponentType,
  ReactChild,
  ReactNode
} from 'react';

import {useModal} from '../../context/ModalContext'

import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  Title,
  CloseButton,
  ModalBody
} from './styles';

const Modal = (Component: ComponentType<any | string> ) => (props: any) => {

  const {
    showModal,
    setShowModal
  } = useModal()

  return (
    <>
      <Backdrop modalActive={showModal}>
        <ModalContainer>
          <ModalHeader>
            <Title>
              Modal Title
            </Title>
            <CloseButton onClick={() => setShowModal(false)}>
              X
            </CloseButton>
          </ModalHeader>
          <ModalBody>
            Contents
          </ModalBody>
        </ModalContainer>
      </Backdrop>
      <Component {...props} />
    </>
  );
}

export default Modal;
