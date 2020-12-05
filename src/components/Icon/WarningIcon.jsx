import React from 'react';
import Icon from './Icon';

const WarningIcon = props => (
  <Icon color="#FFCA00" {...props} width="20" height="20" viewBox="0 0 20 20">
    {/* eslint-disable-next-line max-len */}
    <path d="M9 13h2v2H9v-2zm0-8h2v6H9V5zm.99-5C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </Icon>
);

export default WarningIcon;
