import React from 'react';
import { cleanup, render } from '@testing-library/react';
import gbFlag from '../images/gb.png';

import Flag from '../Flag';

afterEach(cleanup);
describe('<Flag>', () => {
  it('renders with default params', async () => {
    const { getByTestId } = render(<Flag />);
    const img = getByTestId('flag');
    expect(img.attributes.getNamedItem('src')).toBe(null);
  });

  it('renders with default params', async () => {
    const { getByTestId } = render(<Flag country="gb" />);

    const img = getByTestId('flag');

    expect(img.attributes.getNamedItem('src').value).toBe(gbFlag);
  });
});
