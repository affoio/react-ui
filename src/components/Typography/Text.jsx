import React from 'react';
import { omit } from 'ramda';
import styled, { css } from 'styled-components';
import { oneOf, bool, string } from 'prop-types';

import componentFromProp from '../../helpers/hoc';
import { getTypographyFontStyle } from '../../theme/selectors';
import colors from '../../colors';

const getColorStyle = ({ inverse }) => `color: ${inverse ? colors.white : 'inherit'}`;

const Text = componentFromProp('tag');
Text.defaultProps = { tag: 'div' };

export const propTypes = {
  size: oneOf(['100', '200', '300', '400', '500', '600']),
  uppercase: bool,
  inverse: bool,
  fontWeight: string,
};

const TextStyled = styled(props => <Text {...omit(['size', 'uppercase', 'fontWeight', 'inverse'], props)} />)`
  display: inline;
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
  ${({ fontWeight }) =>
    css`
      font-weight: ${fontWeight};
    `}
  ${({ size, theme }) => getTypographyFontStyle(theme, size)}
  ${getColorStyle}
`;

TextStyled.defaultProps = {
  fontWeight: 'normal',
};

export default React.memo(TextStyled);
