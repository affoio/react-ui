import React from 'react';
import Col from '../Col';
import { renderWithThemeProvider } from '../../../helpers/testHelpers';

describe('<Col>', () => {
  it('renders Col', () => {
    const tree = renderWithThemeProvider(<Col>Test Text</Col>);

    expect(tree).toMatchSnapshot();
  });

  it('renders Col with grow', () => {
    const tree = renderWithThemeProvider(<Col grow>Test Text</Col>);

    expect(tree).toMatchSnapshot();
  });

  it('renders hidden in xs Col', () => {
    const tree = renderWithThemeProvider(<Col xs={false}>Test Text</Col>);

    expect(tree).toMatchSnapshot();
  });

  it('renders Col fullsize in xs', () => {
    const tree = renderWithThemeProvider(<Col xs>Test Text</Col>);

    expect(tree).toMatchSnapshot();
  });

  it('renders Col xs=12 sm=6 lg=4', () => {
    const tree = renderWithThemeProvider(
      <Col xs={12} sm={6} lg={4}>
        Test Text
      </Col>
    );

    expect(tree).toMatchSnapshot();
  });
  it('renders Col withOffset xs=12 sm=6 lg=4', () => {
    const tree = renderWithThemeProvider(
      <Col xsOffset={12} smOffset={6} lgOffset={4}>
        Test Text
      </Col>
    );

    expect(tree).toMatchSnapshot();
  });
});
