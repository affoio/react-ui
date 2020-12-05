import React from 'react';
import { bool, element, oneOfType, string, oneOf, func } from 'prop-types';
import ButtonAddon from './ButtonAddon';
import { sizes, sizesList } from '../../enums/sizeEnum';
import Spin from './Spin/Spin';
import { ButtonStyled, ButtonChildrenWrapper, ButtonText } from './ButtonStyled';

export const propTypes = {
  /**
   *  on of Size
   */
  size: oneOf(sizesList),
  /**
   * onClick function
   */
  onClick: func,
  disabled: bool,
  inverse: bool,
  use: oneOf(['primary', 'secondary', 'tertiary']),
  /**
   *  Text or React children
   */
  children: oneOfType([element, string]),
  before: element,
  after: element,
  isLoading: bool,
  /**
   *  button fills the entire space
   */
  fullWidth: bool,
  type: string,
};

export const defaultProps = {
  use: 'primary',
  size: sizes.small,
  type: 'button',
};

const Button = props => {
  const { isLoading, children, before, after, size, use, inverse, type, ...otherProps } = props;

  return (
    <ButtonStyled {...{ ...otherProps, size, use, isLoading, inverse, type }}>
      <Spin show={isLoading} use={use} inverse={inverse}>
        <ButtonChildrenWrapper hide={isLoading}>
          {before && <ButtonAddon {...{ size }}>{before}</ButtonAddon>}
          <ButtonText>{children}</ButtonText>
          {after && (
            <ButtonAddon {...{ size }} position="right">
              {after}
            </ButtonAddon>
          )}
        </ButtonChildrenWrapper>
      </Spin>
    </ButtonStyled>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default React.memo(Button);
