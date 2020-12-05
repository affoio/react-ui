import React from 'react';
import { render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Link from '../Link';

describe('<Link>', () => {
  it('renders correctly', () => {
    const tree = render(
      <Link href="/link">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Link>
    );
    expect(tree).toMatchSnapshot();
  });

  it('render disabled Link', () => {
    const tree = renderer
      .create(<Link disabled>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Link>)
      .toJSON();

    expect(tree).toHaveStyleRule('opacity', '0.5');
  });

  it('render Link with another component', () => {
    const wrapper = mount(
      <Link as="span">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Link>
    );

    expect(wrapper.find('span').length).toBe(1);
  });
});
