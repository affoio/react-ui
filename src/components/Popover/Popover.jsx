import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown/Dropdown';
import MoreIcon from '../Icon/MoreIcon';
import colors from '../../colors';

const PopoverContent = styled.div`
  background: ${colors.white};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, -16px) translateX(16px);
  z-index: 2;
`;

const Popover = ({ children }) => (
  <Dropdown toggle={<MoreIcon hoverColor={colors.black[500]} />} inline>
    <PopoverContent>{children}</PopoverContent>
  </Dropdown>
);

export default Popover;
