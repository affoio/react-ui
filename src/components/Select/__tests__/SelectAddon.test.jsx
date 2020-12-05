import React from 'react';
import renderer from 'react-test-renderer';
import SelectAddon from '../SelectAddon';

describe('<SelectAddon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectAddon />);

    expect(tree).toMatchSnapshot();
  });
});
