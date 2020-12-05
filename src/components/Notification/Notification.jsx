import React, { useCallback } from 'react';
import styled from 'styled-components';
import { oneOf, string, bool, func, oneOfType, element } from 'prop-types';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';
import colors from '../../colors';
import Text from '../Typography/Text';
import { getMultipliedIndentFromProp } from '../../theme/selectors';
import NotificationIcon from './NotificationIcon';
import Flex from '../Grid/Flex';
import Box from '../Grid/Box';
import NotificationClose from './NotificationClose';

const wrapperColors = {
  info: colors.indigoBlue[100],
  warning: colors.marigold[100],
  error: colors.cerise[100],
  success: colors.seaweed[100],
};

const NotificationStyled = styled(Flex)`
  width: 464px;
  max-width: 80vw;
  ${addStyleIfPropTruly('fluid', 'width: 100%; max-width: 100%;')}
  background-color: ${({ type }) => wrapperColors[type]};
  padding: ${getMultipliedIndentFromProp(4)} ${getMultipliedIndentFromProp(2)};
  border-radius: 2px;
`;

const propTypes = {
  title: oneOfType([string, element]),
  type: oneOf(['info', 'warning', 'error', 'success']),
  text: oneOfType([string, element]),
  fluid: bool,
  closable: bool,
  onClose: func,
};

const defaultProps = {
  type: 'info',
};

const Notification = ({ title, type, text, fluid, closable, onClose }) => {
  const onCloseClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <NotificationStyled between {...{ type, fluid }}>
      <Flex>
        <Box mr={2}>
          <NotificationIcon {...{ type }} />
        </Box>
        <Flex middle>
          <Box>
            <Text fontWeight="bold" size="100">
              {title}
            </Text>
            {title && <Text>: </Text>}
            <Text> {text}</Text>
          </Box>
        </Flex>
      </Flex>
      {closable && <NotificationClose onClick={onCloseClick} type={type} />}
    </NotificationStyled>
  );
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
