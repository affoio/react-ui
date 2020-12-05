import React from 'react';
import { mount } from 'enzyme';
import InputPassword, { SwitchEye } from '../InputPassword';
import OpenEyeIcon from '../../Icon/OpenEyeIcon';
import CloseEyeIcon from '../../Icon/CloseEyeIcon';

describe('<InputPassword>', () => {
  it('renders correctly', () => {
    const wrapper = mount(<InputPassword />);

    expect(wrapper.find('input').instance().type).toBe('password');
  });

  it('changes input type after clicking on ', () => {
    const wrapper = mount(<InputPassword />);

    wrapper.find(SwitchEye).simulate('click');
    expect(wrapper.find('input').instance().type).toBe('text');
    expect(wrapper.find(OpenEyeIcon).length).toBe(1);
    expect(wrapper.find(CloseEyeIcon).length).toBe(0);

    wrapper.find(SwitchEye).simulate('click');
    expect(wrapper.find('input').instance().type).toBe('password');
    expect(wrapper.find(OpenEyeIcon).length).toBe(0);
    expect(wrapper.find(CloseEyeIcon).length).toBe(1);
  });
});
