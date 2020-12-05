import React from 'react';
import Container from '../Container';
import { renderWithThemeProvider } from '../../../helpers/testHelpers';

describe('<Container>', () => {
  it('renders Container', () => {
    const tree = renderWithThemeProvider(<Container>Test Text</Container>);

    expect(tree).toMatchSnapshot();
  });

  it('renders fullWidth Container', () => {
    const tree = renderWithThemeProvider(<Container fullWidth>Test Text</Container>);

    expect(tree).toMatchSnapshot();
  });

  it('renders Container with theme', () => {
    const tree = renderWithThemeProvider(<Container>Test Text</Container>, {
      baseIndent: 8,
      container: { indent: { xs: 8, sm: 10, lg: 4 } },
    });

    expect(tree).toMatchSnapshot();
  });
});
