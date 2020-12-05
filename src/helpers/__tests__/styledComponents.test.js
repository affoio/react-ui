import { css } from 'styled-components';

import { addStyleIfPropTruly } from '../styledComponents';

describe('Helpers styledComponents', () => {
  it('add style if prop is truly', () => {
    const testProps = {
      firstProp: true,
      secondProp: false,
    };
    expect(addStyleIfPropTruly('firstProp', `font-size:11px;`)(testProps)).toEqual(css`
      font-size: 11px;
    `);
    expect(addStyleIfPropTruly('secondProp', `font-size:11px;`)(testProps)).toBe(undefined);
  });
});
