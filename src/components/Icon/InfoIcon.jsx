import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Flex from '../Grid/Flex';

const InfoIconStyled = styled(Flex)`
  height: 24px;
  width: 24px;
`;

const InfoIcon = props => (
  <InfoIconStyled center middle>
    <Icon color="#4718B4" {...props} width="20" height="20" viewBox="0 0 20 20">
      <path d="M10 20c5.52 0 10-4.48 10-10S15.52 0 10 0 0 4.48 0 10s4.48 10 10 10zM9 5h2v2H9V5zm0 4h2v6H9V9z" />
    </Icon>
  </InfoIconStyled>
);

export default InfoIcon;
