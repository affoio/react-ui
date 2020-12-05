import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Flex from '../Grid/Flex';

const CloseIconStyled = styled(Flex)`
  height: 16px;
  width: 16px;
`;

const CloseIcon = props => (
  <CloseIconStyled center middle>
    <Icon {...props} width="10" height="10" viewBox="0 0 10 10">
      {/* eslint-disable-next-line max-len */}
      <path d="M9.667 1.273l-.94-.94L5 4.06 1.273.333l-.94.94L4.06 5 .333 8.727l.94.94L5 5.94l3.727 3.727.94-.94L5.94 5z" />
    </Icon>
  </CloseIconStyled>
);

export default CloseIcon;
