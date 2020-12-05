import { css } from 'styled-components';

export const isInteger = value => parseFloat(value) === parseInt(value, 10);
export const calculatePercentageGridValue = (value, gridSize) => `${(100 / gridSize) * value}%`;
export const getLimitedMedia = (breakpoints, current, currentIndex) => {
  return currentIndex !== Object.keys(breakpoints).length - 1
    ? `(min-width: ${breakpoints[current]}px) and (max-width: ${breakpoints[
        Object.keys(breakpoints)[currentIndex + 1]
      ] - 1}px)`
    : `(min-width: ${breakpoints[current]}px)`;
};

export const mediaQueryFunctionsList = breakpoints =>
  Object.keys(breakpoints).reduce((media, breakpoint, index) => {
    const newMedia = { ...media };
    newMedia[breakpoint] =
      index === 0
        ? (...args) => css`
            ${css(...args)}
          `
        : (...args) => css`
            @media (min-width: ${breakpoints[breakpoint]}px) {
              ${css(...args)}
            }
          `;
    return newMedia;
  }, {});

export const mediaQueryFunctionsListWithLimits = breakpoints =>
  Object.keys(breakpoints).reduce((media, breakpoint, index) => {
    const newMedia = { ...media };
    newMedia[breakpoint] = (...args) => css`
      @media ${getLimitedMedia(breakpoints, breakpoint, index)} {
        ${css(...args)}
      }
    `;
    return newMedia;
  }, {});
