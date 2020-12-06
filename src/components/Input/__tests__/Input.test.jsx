import React from 'react';
import { render, mount } from 'enzyme';
import Input from '../Input';
import SearchIcon from '../../Icon/SearchIcon';
import { InputStyled } from '../InputStyled';
import Control from '../../Control/Control';

describe('<Input>', () => {
  describe('Input style snapshots', () => {
    it('renders correctly', () => {
      const tree = render(<Input />);

      expect(tree).toMatchSnapshot();
    });
    it('renders correctly with label', () => {
      const wrapper = mount(<Input label="Some label" />);

      const controlWrapper = wrapper.find(Control);

      expect(controlWrapper.length).toBe(1);
      expect(controlWrapper.props().label).toBe('Some label');
    });

    it('renders correctly with helperText', () => {
      const wrapper = mount(<Input helperText="Some helper text" />);
      const controlWrapper = wrapper.find(Control);

      expect(controlWrapper.length).toBe(1);
      expect(controlWrapper.props().helperText).toBe('Some helper text');
    });

    it('renders correctly when disabled', () => {
      const tree = render(<Input disabled />);

      expect(tree).toMatchSnapshot();
    });

    it('renders correctly with error', () => {
      const wrapper = mount(<Input error="Oh no error" />);

      const controlWrapper = wrapper.find(Control);
      expect(controlWrapper.length).toBe(1);
      expect(controlWrapper.props().error).toBe('Oh no error');
    });

    it('renders correctly focused label with error', () => {
      const wrapper = mount(<Input error="Oh no error" label="some" />);
      wrapper.find('input').simulate('focus');
      const controlProps = wrapper.find(Control).props();

      expect(controlProps.focused).toBe(true);
      expect(controlProps.error).toBe('Oh no error');
    });

    it('renders correctly focused label', () => {
      const wrapper = mount(<Input label="some" />);
      wrapper.find('input').simulate('focus');

      expect(wrapper.find(Control).props().focused).toBe(true);
    });

    it('renders correctly with beforeElement', () => {
      const tree = render(<Input before={<SearchIcon />} />);

      expect(tree).toMatchSnapshot();
    });

    it('renders correctly with after', () => {
      const tree = render(<Input after={<SearchIcon />} />);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Input handlers', () => {
    it('calls onFocus when it passed', () => {
      const mockFn = jest.fn();
      const wrapper = mount(<Input onFocus={mockFn} />);
      wrapper.find(InputStyled).simulate('focus');

      expect(wrapper.find(Control).props().focused).toBe(true);
      expect(mockFn).toBeCalled();
    });

    it('doesnt calls onFocus when it does not passed', () => {
      const wrapper = mount(<Input />);
      wrapper.find(InputStyled).simulate('focus');

      expect(wrapper.find(Control).props().focused).toBe(true);
    });

    it('calls onBlur when it passed', () => {
      const mockFn = jest.fn();
      const wrapper = mount(<Input onBlur={mockFn} />);
      wrapper.find(InputStyled).simulate('blur');

      expect(wrapper.find(Control).props().focused).toBe(false);
      expect(mockFn).toBeCalled();
    });

    it('doesnt calls onBlur when it does not passed', () => {
      const mockFn = jest.fn();
      const wrapper = mount(<Input />);
      wrapper.find(InputStyled).simulate('blur');

      expect(wrapper.find(Control).props().focused).toBe(false);
      expect(mockFn).not.toBeCalled();
    });

    it('calls onChange when it passed', () => {
      const mockFn = jest.fn();
      const wrapper = mount(<Input onChange={mockFn} />);
      wrapper.find('input').simulate('change', { target: { value: 'Hello' } });

      expect(wrapper.find('input').instance().value).toBe('Hello');
      expect(mockFn).toBeCalled();
    });

    it('doesnt calls onBlur when it does not passed', () => {
      const mockFn = jest.fn();
      const wrapper = mount(<Input />);
      wrapper.find('input').simulate('change', { target: { value: 'Hello' } });

      expect(wrapper.find('input').instance().value).toBe('Hello');
      expect(mockFn).not.toBeCalled();
    });
  });
});
