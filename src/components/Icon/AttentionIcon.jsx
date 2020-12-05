import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Flex from '../Grid/Flex';

const AttentionIconStyled = styled(Flex)`
  height: 24px;
  width: 24px;
`;

const AttentionIcon = props => (
  <AttentionIconStyled center middle>
    <Icon color="#FFCA00" {...props} width="22" height="19" viewBox="0 0 22 19">
      <path d="M0 19h22L11 0 0 19zm12-3h-2v-2h2v2zm0-4h-2V8h2v4z" />
    </Icon>
  </AttentionIconStyled>
);

export default AttentionIcon;
