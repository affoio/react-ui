import React from 'react';
import styled from 'styled-components';
import Box from '../Grid/Box';
import CloseIcon from '../Icon/CloseIcon';
import colors from '../../colors';

const closeIconColors = {
  info: colors.indigoBlue[600],
  warning: colors.marigold[600],
  error: colors.cerise[600],
  success: colors.seaweed[600],
};

const NotificationCloseStyled = styled(Box)`
  min-width: 16px;
  cursor: pointer;
`;

const NotificationClose = ({ onClick, type }) => (
  <NotificationCloseStyled mt={1}>
    <CloseIcon color={closeIconColors[type]} onClick={onClick} />
  </NotificationCloseStyled>
);

export default NotificationClose;
