import React from 'react';
import renderer from 'react-test-renderer';
import SelectOptions from '../SelectOptions';

describe('<SelectOptions', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectOptions />);

    expect(tree).toMatchSnapshot();
  });
});
