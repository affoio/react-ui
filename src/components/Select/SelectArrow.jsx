import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import { addStyleIfPropTruly } from '../../helpers/styledComponents';

import ArrowUpIcon from '../Icon/ArrowUpIcon';
import SelectAddon from './SelectAddon';
import colors from '../../colors';

export const SelectArrowStyled = styled(ArrowUpIcon)`
  transform: rotate(0);
  transition: transform 0.2s linear;
  will-change: transform;
  ${addStyleIfPropTruly('isOpen', 'transform: rotate(-180deg)')}
`;

const propTypes = {
  isOpen: bool,
  active: bool,
};

const SelectArrow = ({ isOpen, active }) => {
  const color = active ? colors.black[800] : colors.black[400];

  return (
    <SelectAddon position="right">
      <SelectArrowStyled {...{ color, isOpen }} />
    </SelectAddon>
  );
};

SelectArrow.propTypes = propTypes;

export default SelectArrow;
