import { createElement } from 'react';
import { omit } from 'ramda';

const componentFromProp = propName => {
  const Component = props => createElement(props[propName], omit([propName], props));
  Component.displayName = `componentFromProp(${propName})`;
  return Component;
};

export default componentFromProp;
