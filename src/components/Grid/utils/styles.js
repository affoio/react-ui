import { css } from 'styled-components';
import { useMemo } from 'react';
import { themeConfig } from '../../../theme';
import { getBreakpoints } from '../../../theme/selectors';
import { mediaQueryFunctionsListWithLimits } from '../../../theme/helpers';

export const useMediaQuery = theme => {
  return useMemo(() => mediaQueryFunctionsListWithLimits(getBreakpoints(theme)), [theme]);
};

export const addRowPropStyle = (propName, style) => props => {
  const { mediaQuery } = props;
  const prop = props[propName];

  if (Array.isArray(prop)) {
    return prop
      .filter(breakpoint => themeConfig.breakpointNames.indexOf(breakpoint) > -1)
      .map(
        breakpoint => mediaQuery[breakpoint]`
      ${style}
    `
      );
  }

  if (themeConfig.breakpointNames.indexOf(prop) > -1) {
    return mediaQuery[prop]`
        ${style}
    `;
  }

  if (prop) {
    return `
      ${style}
    `;
  }
};

const addCenterStyle = addRowPropStyle('center', 'justify-content: center;');
const addLastStyle = addRowPropStyle('last', 'order: 1;');
const addFirstStyle = addRowPropStyle('first', 'order: -1;');
const addBetweenStyle = addRowPropStyle('between', 'justify-content: space-between;');
const addAroundStyle = addRowPropStyle('around', 'justify-content: space-around;');
const addBottomStyle = addRowPropStyle('bottom', 'align-items: flex-end;');
const addMiddleStyle = addRowPropStyle('middle', 'align-items: center;');
const addTopStyle = addRowPropStyle('top', 'align-items: start;');
const addEndStyle = addRowPropStyle('end', 'justify-content: flex-end;');
const addStartStyle = addRowPropStyle('start', 'justify-content: flex-start;');
const addReverseStyle = addRowPropStyle('reverse', 'flex-direction: row-reverse;');
const addGrowStyle = addRowPropStyle('grow', 'flex-grow: 1');

export const addFlexStyles = () => css`
  ${addReverseStyle}
  ${addStartStyle}
  ${addCenterStyle}
  ${addEndStyle}
  ${addTopStyle}
  ${addMiddleStyle}
  ${addBottomStyle}
  ${addAroundStyle}
  ${addBetweenStyle}
  ${addFirstStyle}
  ${addLastStyle}
  ${addGrowStyle}
`;
