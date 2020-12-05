import React from 'react';
import { oneOf, bool } from 'prop-types';

import Text from './Text';

const sizeFromLevel = {
  '1': '600',
  '2': '500',
  '3': '300',
};

export const propTypes = {
  level: oneOf(['1', '2', '3']),
  inverse: bool,
};

const defaultProps = {
  level: '1',
};

const Title = ({ children, level, ...otherProps }) => {
  const size = sizeFromLevel[level];

  return (
    <Text {...otherProps} size={size} fontWeight="bold">
      {children}
    </Text>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
