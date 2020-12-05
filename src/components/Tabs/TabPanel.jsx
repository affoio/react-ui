import React from 'react';
import styled from 'styled-components';
import { getTypographyFontSizeStyles, getMultipliedIndentFromProp } from '../../theme/selectors';
import colors from '../../colors';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

const TabPanel = styled.button.attrs({
  role: 'tab',
})`
  ${({ theme }) => getTypographyFontSizeStyles(theme, 300)};
  border: none;
  background: none;
  height: 40px;
  color: ${colors.black[500]};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 ${getMultipliedIndentFromProp(4)};

  &:focus,
  &:hover {
    color: ${colors.indigoBlue[800]};
  }

  ${addStyleIfPropTruly(
    'active',
    `
    color: ${colors.indigoBlue[800]};
    border-bottom: 2px solid ${colors.marigold[800]}
  `
  )}
`;

export const withTabPanel = (activeTab, changeActiveTab) => props => (
  <TabPanel active={activeTab === props.id} onClick={() => changeActiveTab(props.id)} {...props} />
);
