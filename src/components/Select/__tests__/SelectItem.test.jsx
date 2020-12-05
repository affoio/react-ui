import React from 'react';
import renderer from 'react-test-renderer';
import SelectItem from '../SelectItem';
import colors from '../../../colors';

describe('<SelectItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectItem />);

    expect(tree).toMatchSnapshot();
  });

  it('changes color when checked', () => {
    const tree = renderer.create(<SelectItem checked />).toJSON();

    expect(tree).toHaveStyleRule(`background-color: ${colors.indigoBlue[100]}`);
  });
});
