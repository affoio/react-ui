import React from 'react';
import Icon from './Icon';
import colors from '../../colors/index';

const MoreIcon = props => (
  <Icon color={colors.black[400]} {...props} width="24" height="24" viewBox="0 0 6 24">
    <g fillRule="evenodd" transform="translate(0, 4)">
      {/* eslint-disable-next-line max-len */}
      <path d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </g>
  </Icon>
);

export default MoreIcon;
