import React from 'react';
import renderer from 'react-test-renderer';
import SelectArrow from '../SelectArrow';
import colors from '../../../colors';

describe('<SelectArrow', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectArrow />);

    expect(tree).toMatchSnapshot();
  });

  it('rotates when isOpen', () => {
    const tree = renderer.create(<SelectArrow isOpen />).toJSON();

    expect(tree).toHaveStyleRule('transform: rotate(-180deg)');
  });

  it('changes color when active', () => {
    const tree = renderer.create(<SelectArrow active />).toJSON();

    expect(tree).toHaveStyleRule(`color: ${colors.black[800]}`);
  });
});
