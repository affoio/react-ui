import React from 'react';
import renderer from 'react-test-renderer';
import { defaultTheme } from '../../../theme';
import Box from '../Box';
import { renderWithThemeProvider } from '../../../helpers/testHelpers';

describe('<Box>', () => {
  it('renders Box', () => {
    const tree = renderWithThemeProvider(<Box>Test Text</Box>);

    expect(tree).toMatchSnapshot();
  });

  it('add width with width prop', () => {
    const tree = renderer.create(<Box width="100px">Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('width', '100px');
  });

  it('adds max-width if maxWidth', () => {
    const tree = renderer.create(<Box maxWidth="100%">Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('max-width', '100%');
  });

  it('add horizontal paddings with px prop', () => {
    const tree = renderer.create(<Box px={4}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('padding-left', `${4 * defaultTheme.baseIndent}px`);
    expect(tree).toHaveStyleRule('padding-right', `${4 * defaultTheme.baseIndent}px`);
  });

  it('add vertical paddings with py prop', () => {
    const tree = renderer.create(<Box py={4}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('padding-top', `${4 * defaultTheme.baseIndent}px`);
    expect(tree).toHaveStyleRule('padding-bottom', `${4 * defaultTheme.baseIndent}px`);
  });

  it('add padding-top with pt prop', () => {
    const tree = renderer.create(<Box pt={4}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('padding-top', `${4 * defaultTheme.baseIndent}px`);
  });

  it('add bottom padding with pb prop', () => {
    const tree = renderer.create(<Box pb={4}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('padding-bottom', `${4 * defaultTheme.baseIndent}px`);
  });

  it('add horizontal margins with mx prop', () => {
    const tree = renderer.create(<Box mx={2}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('margin-left', `${2 * defaultTheme.baseIndent}px`);
    expect(tree).toHaveStyleRule('margin-right', `${2 * defaultTheme.baseIndent}px`);
  });

  it('add vertical margins with py prop', () => {
    const tree = renderer.create(<Box my={2}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('margin-top', `${2 * defaultTheme.baseIndent}px`);
    expect(tree).toHaveStyleRule('margin-bottom', `${2 * defaultTheme.baseIndent}px`);
  });

  it('add margin-top with mt prop', () => {
    const tree = renderer.create(<Box mt={2}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('margin-top', `${2 * defaultTheme.baseIndent}px`);
  });

  it('add bottom margin with mb prop', () => {
    const tree = renderer.create(<Box mb={2}>Test Text</Box>).toJSON();

    expect(tree).toHaveStyleRule('margin-bottom', `${2 * defaultTheme.baseIndent}px`);
  });
});
