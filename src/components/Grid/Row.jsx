import React from 'react';
import { node, bool, oneOf, oneOfType, arrayOf } from 'prop-types';
import { equals, omit } from 'ramda';
import styled, { css, withTheme } from 'styled-components';
import { getBaseIndent, getGutterWidth } from '../../theme/selectors';
import { themeConfig } from '../../theme';
import Col from './Col';
import { addFlexStyles, addRowPropStyle, useMediaQuery } from './utils/styles';

export const rowProps = [
  'reverse',
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'first',
  'last',
  'fluid',
  'grow',
];
const RowPropType = oneOfType([oneOf(themeConfig.breakpointNames), bool, arrayOf(oneOf(themeConfig.breakpointNames))]);

const propTypes = {
  reverse: RowPropType,
  start: RowPropType,
  center: RowPropType,
  end: RowPropType,
  top: RowPropType,
  middle: RowPropType,
  bottom: RowPropType,
  around: RowPropType,
  between: RowPropType,
  first: RowPropType,
  last: RowPropType,
  fluid: RowPropType,
  children: node,
};

const addFluidStyle = addRowPropStyle(
  'fluid',
  `
  & > ${Col}:first-child {
    padding-left: 0;
  }

  & > ${Col}:last-child {
    padding-right: 0;
  }
  `
);

const RowStyled = styled(props => <div {...omit([...rowProps, 'mediaQuery', 'theme'], props)} />)`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }) => {
    const rowMargin = `-${getBaseIndent(theme) * getGutterWidth(theme)}px`;
    return css`
      margin-right: ${rowMargin};
      margin-left: ${rowMargin};
    `;
  }}

  ${addFlexStyles}
  ${addFluidStyle}
`;

const Row = React.memo(props => {
  const { theme, children } = props;
  const mediaQuery = useMediaQuery(theme);

  return <RowStyled {...{ ...props, mediaQuery }}>{children}</RowStyled>;
}, equals);

Row.propTypes = propTypes;

export default withTheme(Row);
