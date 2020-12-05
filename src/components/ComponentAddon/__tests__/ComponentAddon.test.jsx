import React from 'react';
import { render } from 'enzyme';
import ComponentAddon from '../ComponentAddon';

describe('<ComponentAddon>', () => {
  it('renders correctly', () => {
    const tree = render(<ComponentAddon />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with position right', () => {
    const tree = render(<ComponentAddon position="right" />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with marginSize', () => {
    const marginSizeList = [1, 2, 4];
    marginSizeList.forEach(size => {
      const tree = render(<ComponentAddon marginSize={size} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
