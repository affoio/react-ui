import React from 'react';
import renderer from 'react-test-renderer';
import SelectButton from '../SelectButton';

describe('<SelectButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectButton />);

    expect(tree).toMatchSnapshot();
  });
});
