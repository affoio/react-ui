import React from 'react';
import { render, mount } from 'enzyme';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const tree = render(<Checkbox />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with label', () => {
    const tree = render(<Checkbox label="Label" />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with defaultChecked', () => {
    const tree = render(<Checkbox defaultChecked />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with disabled', () => {
    const tree = render(<Checkbox disabled />);

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly after check', () => {
    const wrapper = mount(<Checkbox />);
    wrapper.simulate('click');

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('correctly calls onChange', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Checkbox onChange={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toBeCalledWith(true);
    wrapper.simulate('click');
    expect(mockFn).toBeCalledWith(false);
  });

  it('doesnt calls onChange when disabled', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Checkbox disabled onChange={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).not.toBeCalled();
  });
});
