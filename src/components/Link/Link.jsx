import { bool, elementType } from 'prop-types';
import styled, { css } from 'styled-components';
import colors from '../../colors';

const propTypes = {
  component: elementType,
  disabled: bool,
};

const Link = styled.a`
  text-decoration: none;
  color: ${colors.indigoBlue[800]};
  cursor: pointer;
  display: inline-block;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: text;
        `
      : css`
          &:hover,
          &:focus {
            text-decoration: underline;
          }
        `}
`;

Link.propTypes = propTypes;
Link.defaultProps = {
  component: 'a',
};

export default Link;
