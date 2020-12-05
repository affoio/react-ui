import { css } from 'styled-components';

export const addStyleIfPropTruly = (propName, style) => props => {
  if (props[propName]) {
    return css`
      ${style}
    `;
  }
};
