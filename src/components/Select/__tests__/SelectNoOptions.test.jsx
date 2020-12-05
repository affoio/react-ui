import React from 'react';
import renderer from 'react-test-renderer';
import SelectNoOptions from '../SelectNoOptions';

describe('<SelectNoOptions', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectNoOptions />);

    expect(tree).toMatchSnapshot();
  });
});
