import React from 'react';
import styled from 'styled-components';
import { node, func, string, instanceOf } from 'prop-types';
import Portal from '../Portal/Portal';
import PortalOverlay from '../Portal/PortalOverlay';

const ModalOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: inline-block;
`;

const propTypes = {
  container: instanceOf(Element).isRequired,
  children: node.isRequired,
  top: string,
  left: string,
  right: string,
  bottom: string,
  onClick: func,
};

const Modal = ({ container, children, top, left, right, bottom, onClick, onOpen, onClose }) => (
  <Portal container={container} {...{ onOpen, onClose }}>
    <PortalOverlay {...{ top, left, right, bottom }}>
      <ModalOverlay {...{ onClick }} />
      <ModalContent>{children}</ModalContent>
    </PortalOverlay>
  </Portal>
);

Modal.propTypes = propTypes;

export default Modal;
