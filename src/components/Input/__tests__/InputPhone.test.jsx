import React from 'react';
import { mount } from 'enzyme';
import { act } from '@testing-library/react';
import InputPhone, { defaultDialCode } from '../InputPhone';
import Flag from '../../Flag/Flag';
import Select from '../../Select/Select';
import SelectItem from '../../Select/SelectItem';
import { DropdownToggle } from '../../Dropdown/Dropdown';

describe('<InputPhone>', () => {
  it('renders correctly', () => {
    act(() => {
      const wrapper = mount(<InputPhone />);

      expect(wrapper.find('input').prop('value')).toBe(defaultDialCode);
      expect(
        wrapper
          .find(Flag)
          .first()
          .prop('country')
      ).toBe('gb');
    });
  });

  it('changes flag after changing input code', async () => {
    const wrapper = mount(<InputPhone />);
    wrapper.find('input').simulate('change', { target: { value: '+7' } });
    expect(wrapper.find('input').instance().value).toBe('+7');
    expect(
      wrapper
        .find(DropdownToggle)
        .find(Flag)
        .prop('country')
    ).toBe('ru');
  });

  it('changes input value after select country', async () => {
    const wrapper = mount(<InputPhone />);
    wrapper.find(Select).simulate('click');
    wrapper
      .find(SelectItem)
      .first()
      .simulate('click');
    expect(wrapper.find('input').instance().value).toBe('+93');
    expect(
      wrapper
        .find(Flag)
        .first()
        .prop('country')
    ).toBe('af');
  });

  it('add leading plus if delete all value', () => {
    const wrapper = mount(<InputPhone />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '+7921' } });
    expect(input.instance().value).toBe('+7921');

    input.simulate('change', { target: { value: '' } });
    expect(input.instance().value).toBe('+');
    expect(
      wrapper
        .find(Flag)
        .first()
        .prop('country')
    ).toBe('ru');
  });

  it('pass only numbers', () => {
    const wrapper = mount(<InputPhone />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'asda' } });
    expect(input.instance().value).toBe('+44');
  });
});
