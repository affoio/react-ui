import React from 'react';
import { render } from 'enzyme';
import Icon from '../Icon';

describe('<Icon>', () => {
  it('renders correctly', () => {
    const tree = render(<Icon />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with color', () => {
    const tree = render(<Icon color="red" />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with hoverColor', () => {
    const tree = render(<Icon hoverColor="red" />);

    expect(tree).toMatchSnapshot();
  });
});
