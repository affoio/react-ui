import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { func, string, instanceOf } from 'prop-types';
import Portal from '../Portal/Portal';
import Notification from '../Notification/Notification';
import PortalOverlay from '../Portal/PortalOverlay';
import Flex from '../Grid/Flex';
import colors from '../../colors';
import { getMultipliedIndentFromProp } from '../../theme/selectors';

const ToastWrapper = styled(Flex)`
  background: ${colors.white};
  border-radius: 2px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  padding: ${getMultipliedIndentFromProp(2)};
`;

const propTypes = {
  container: instanceOf(Element).isRequired,
  top: string,
  left: string,
  right: string,
  bottom: string,
  onClick: func,
};

const Toast = ({ container, top, left, right, bottom, title, text, type, onOpen, onClose }) => {
  const [visible, changeVisibility] = useState(true);

  const transitions = useTransition(visible, null, {
    from: { transform: 'translateX(200px)' },
    enter: { transform: 'translateX(0)' },
  });

  return (
    visible && (
      <Portal container={container} {...{ onOpen, onClose }}>
        <PortalOverlay {...{ top, left, right, bottom }}>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <ToastWrapper>
                    <Notification {...{ text, title, type }} closable onClose={() => changeVisibility(false)} />
                  </ToastWrapper>
                </animated.div>
              )
          )}
        </PortalOverlay>
      </Portal>
    )
  );
};

Toast.propTypes = propTypes;

export default Toast;
