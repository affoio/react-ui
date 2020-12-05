import React from 'react';
import { render } from 'enzyme';
import CloseEyeIcon from '../CloseEyeIcon';
import OpenEyeIcon from '../OpenEyeIcon';
import SearchIcon from '../SearchIcon';

describe('Icons snapshots', () => {
  it('CloseEyeIcon renders correctly', () => {
    const tree = render(<CloseEyeIcon />);

    expect(tree).toMatchSnapshot();
  });

  it('OpenEyeIcon renders correctly', () => {
    const tree = render(<OpenEyeIcon />);

    expect(tree).toMatchSnapshot();
  });

  it('SearchIcon renders correctly', () => {
    const tree = render(<SearchIcon />);

    expect(tree).toMatchSnapshot();
  });
});
