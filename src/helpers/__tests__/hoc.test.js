import React from 'react';
import { render } from 'enzyme';

import componentFromProp from '../hoc';

describe('Helpers/hoc', () => {
  describe('componentFromProp', () => {
    const Component = componentFromProp('tag');
    it('creates element from prop tag', () => {
      expect(render(<Component tag="div" />)).toEqual(render(<div />));
    });
    it('passes props to component', () => {
      const tree = render(
        <Component tag="a" href="/link">
          text
        </Component>
      );

      const expectedTree = render(<a href="/link">text</a>);

      expect(tree).toEqual(expectedTree);
    });
  });
});
