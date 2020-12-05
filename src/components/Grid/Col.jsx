import { number, oneOfType, bool, node } from 'prop-types';
import styled, { css } from 'styled-components';

import { themeConfig } from '../../theme';
import { mediaQueryFunctionsListWithLimits, isInteger, calculatePercentageGridValue } from '../../theme/helpers';
import { getBreakpoints, getGridSize, getBaseIndent, getGutterWidth } from '../../theme/selectors';

const ColPropType = oneOfType([number, bool]);
const ColOffsetPropType = number;

const colProps = themeConfig.breakpointNames.reduce((colProp, breakpoint) => {
  const newColProp = { ...colProp };
  newColProp[breakpoint] = ColPropType;
  newColProp[`${breakpoint}Offset`] = ColOffsetPropType;

  return newColProp;
}, {});

const propTypes = {
  ...colProps,
  children: node,
};

const createBreakpointsStyles = props => {
  const { theme } = props;
  const gridSize = getGridSize(theme);
  const breakpoints = getBreakpoints(theme);
  const mediaQueries = mediaQueryFunctionsListWithLimits(breakpoints);

  return Object.keys(props)
    .filter(breakpoint => themeConfig.breakpointNames.indexOf(breakpoint) > -1)
    .sort(
      (breakpoint1, breakpoint2) =>
        themeConfig.breakpointNames.indexOf(breakpoint1) - themeConfig.breakpointNames.indexOf(breakpoint2)
    )
    .map(breakpoint => {
      return isInteger(props[breakpoint])
        ? mediaQueries[breakpoint]`
            flex-basis: ${calculatePercentageGridValue(props[breakpoint], gridSize)};
            max-width: ${calculatePercentageGridValue(props[breakpoint], gridSize)};
          `
        : mediaQueries[breakpoint]`${
            props[breakpoint] === true
              ? `
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            `
              : `
              display: none;
            `
          }`;
    });
};

const createBreakpointOffsetStyles = props => {
  const { theme } = props;

  return Object.keys(props)
    .filter(breakpoint => themeConfig.breakpointOffsetNames.indexOf(breakpoint) > -1)
    .map(breakpoint => {
      return mediaQueryFunctionsListWithLimits(getBreakpoints(theme))[breakpoint.replace(/Offset/g, '')]`
        margin-left: ${calculatePercentageGridValue(props[breakpoint], getGridSize(theme))};
      `;
    });
};

const Col = styled.div`
  box-sizing: border-box;
  ${({ grow }) => `flex-grow: ${+!!grow};`}
  max-width: 100%;

  ${({ theme }) => {
    const colPadding = `${getGutterWidth(theme) * getBaseIndent(theme)}px`;
    return css`
      padding-right: ${colPadding};
      padding-left: ${colPadding};
    `;
  }}
  flex-direction: column;
  ${createBreakpointsStyles}
  ${createBreakpointOffsetStyles}
`;

Col.propTypes = propTypes;

export default Col;
