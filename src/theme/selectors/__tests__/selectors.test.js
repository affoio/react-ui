import { getTypographyLineHeightStyles, getDefaultTheme } from '..';
import { defaultTheme } from '../..';

describe('Theme selectors', () => {
  it('return lineHeight from size', () => {
    const result = getTypographyLineHeightStyles(getDefaultTheme(), 100);

    expect(result).toBe(`line-height: ${defaultTheme.typography[100].lineHeight};`);
  });
});
