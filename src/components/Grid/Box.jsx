import React from 'react';
import { number, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { getMultipliedIndent } from '../../theme/selectors';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

export const propTypes = {
  py: number,
  px: number,
  pb: number,
  pt: number,
  mx: number,
  my: number,
  mb: number,
  mt: number,
  mr: number,
  ml: number,
  maxWidth: string,
  width: string,
};

const Box = styled.div`
  box-sizing: border-box;
  ${({ py, theme }) => {
    if (py) {
      const indent = getMultipliedIndent(theme, py);

      return css`
        padding-top: ${indent};
        padding-bottom: ${indent};
      `;
    }
  }}
  ${({ px, theme }) => {
    if (px) {
      const indent = getMultipliedIndent(theme, px);

      return css`
        padding-left: ${indent};
        padding-right: ${indent};
      `;
    }
  }}
  
  ${({ pb, theme }) => {
    if (pb) {
      const indent = getMultipliedIndent(theme, pb);

      return css`
        padding-bottom: ${indent};
      `;
    }
  }}
  
  ${({ pt, theme }) => {
    if (pt) {
      const indent = getMultipliedIndent(theme, pt);

      return css`
        padding-top: ${indent};
      `;
    }
  }}
  
  ${({ mx, theme }) => {
    if (mx) {
      const indent = getMultipliedIndent(theme, mx);

      return css`
        margin-left: ${indent};
        margin-right: ${indent};
      `;
    }
  }}
  
  ${({ my, theme }) => {
    if (my) {
      const indent = getMultipliedIndent(theme, my);

      return css`
        margin-top: ${indent};
        margin-bottom: ${indent};
      `;
    }
  }}
  
  ${({ mb, theme }) => {
    if (mb) {
      const indent = getMultipliedIndent(theme, mb);

      return css`
        margin-bottom: ${indent};
      `;
    }
  }}
  
  ${({ mt, theme }) => {
    if (mt) {
      const indent = getMultipliedIndent(theme, mt);

      return css`
        margin-top: ${indent};
      `;
    }
  }}
  ${({ mr, theme }) => {
    if (mr) {
      const indent = getMultipliedIndent(theme, mr);

      return css`
        margin-right: ${indent};
      `;
    }
  }}
  
  ${({ ml, theme }) => {
    if (ml) {
      const indent = getMultipliedIndent(theme, ml);

      return css`
        margin-left: ${indent};
      `;
    }
  }}

  ${({ width }) => width && `width: ${width};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${addStyleIfPropTruly('flex', 'display: flex')}
`;

Box.propTypes = propTypes;

export default React.memo(Box);
