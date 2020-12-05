import React from 'react';
import Row, { rowProps } from '../Row';
import { renderWithThemeProvider } from '../../../helpers/testHelpers';

describe('<Row>', () => {
  it('renders Row', () => {
    const tree = renderWithThemeProvider(<Row>Test Text</Row>);

    expect(tree).toMatchSnapshot();
  });

  rowProps.forEach(prop => {
    it(`renders Row ${prop}`, () => {
      const tree = renderWithThemeProvider(<Row {...{ [prop]: true }}>Test Text</Row>);
      const treeWithValue = renderWithThemeProvider(<Row {...{ [prop]: 'xs' }}>Test Text</Row>);
      const treeWithArray = renderWithThemeProvider(<Row {...{ [prop]: ['xs', 'lg'] }}>Test Text</Row>);

      expect(tree).toMatchSnapshot();
      expect(treeWithValue).toMatchSnapshot();
      expect(treeWithArray).toMatchSnapshot();
    });
  });
});
