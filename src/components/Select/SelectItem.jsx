import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';
import colors from '../../colors';
import { getMultipliedIndent } from '../../theme/selectors';

const SelectItemStyled = styled.div`
  height: ${({ theme }) => getMultipliedIndent(theme, 12)};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => getMultipliedIndent(theme, 4)};
  cursor: pointer;

  &:hover {
    background-color: ${colors.indigoBlue[100]};
  }

  ${addStyleIfPropTruly('focused', `background-color: ${colors.indigoBlue[100]};`)}
  ${addStyleIfPropTruly('checked', `background-color: ${colors.indigoBlue[200]};`)}
  ${addStyleIfPropTruly('inline', 'white-space: nowrap;')}
`;

const propTypes = {
  checked: bool,
};

const SelectItem = React.forwardRef((props, ref) => <SelectItemStyled {...props} ref={ref} />);

SelectItem.propTypes = propTypes;

export default SelectItem;
