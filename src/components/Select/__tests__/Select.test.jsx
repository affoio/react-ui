import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Select, { reducer } from '../Select';
import SelectNoOptions from '../SelectNoOptions';
import SelectOptions from '../SelectOptions';
import SelectItem from '../SelectItem';
import SelectButton from '../SelectButton';
import Dropdown from '../../Dropdown/Dropdown';
import { getMultipliedIndent } from '../../../theme/selectors';
import { defaultTheme } from '../../../theme';

const optionsMock = [
  { value: 2, label: 'england' },
  { value: 3, label: 'america' },
  { value: 4, label: 'russia' },
  { value: 5, label: 'Australia' },
];
describe('<Select', () => {
  it('renders SelectNoOptions when no options', () => {
    const wrapper = shallow(<Select />);

    expect(wrapper.find(SelectNoOptions).length).toBe(1);
  });

  it('renders inline style', () => {
    const wrapper = mount(<Select inline options={optionsMock} />);
    wrapper.find(SelectButton).simulate('click');

    expect(wrapper.find(SelectButton).length).toBe(1);
    expect(toJSON(wrapper.find(SelectOptions).render())).toHaveStyleRule(
      'margin-top',
      getMultipliedIndent(defaultTheme, 2)
    );
  });

  it('changes readOnly when isSearchable', () => {
    const wrapper = shallow(<Select isSearchable />);

    expect(wrapper.props().toggle.props.readOnly).toBe(false);
  });

  it('gets defaultLabel from defaultValue', () => {
    const wrapper = shallow(<Select isSearchable defaultValue={{ value: 3 }} options={optionsMock} />);

    expect(wrapper.props().toggle.props.value).toBe(optionsMock[1].label);
  });

  it('shows no options when no filtered options', () => {
    const wrapper = mount(<Select isSearchable options={optionsMock} inline={false} />);
    wrapper.find('input').simulate('change', { target: { value: '123' } });
    expect(wrapper.find(SelectNoOptions).length).toBe(1);

    wrapper.find('input').simulate('change', { target: { value: 'en' } });
    expect(wrapper.find(SelectNoOptions).length).toBe(0);
    expect(wrapper.find(SelectItem).length).toBe(1);
  });

  it('changes state on open and close handler', () => {
    const wrapper = mount(<Select isSearchable options={optionsMock} />);
    const getSelectArrowProps = () => wrapper.find(Dropdown).props().toggle.props.after.props;

    wrapper
      .find(Dropdown)
      .props()
      .onToggle();
    wrapper.update();

    wrapper
      .find(Dropdown)
      .props()
      .onToggle();
    wrapper.update();

    expect(getSelectArrowProps().isOpen).toBe(true);

    wrapper
      .find(Dropdown)
      .props()
      .onClickOutside();
    wrapper.update();
    expect(getSelectArrowProps().isOpen).toBe(false);
  });

  it('changes select value on item click', () => {
    const wrapper = mount(<Select isSearchable options={optionsMock} />);

    wrapper.find('input').simulate('change', { target: { value: 'en' } });
    wrapper.find(SelectItem).simulate('click');
    wrapper.update();

    expect(wrapper.find(Dropdown).props().toggle.props.value).toBe(optionsMock[0].label);
  });

  // FIXME: wrong state
  // it('calls onChange with item when changes select value', () => {
  //   const onChangeMock = jest.fn();
  //   const wrapper = shallow(<Select isSearchable options={optionsMock} onChange={onChangeMock} />);

  //   wrapper.props().toggle.props.onChange({ target: { value: 'en' } });
  //   wrapper.find(SelectItem).simulate('click');
  //   wrapper.update();

  //   expect(onChangeMock).toBeCalledWith(optionsMock[0]);
  // });

  // FIXME: wrong state
  // it('doesnt changes select value on item click when disabled', () => {
  //   const onChangeMock = jest.fn();
  //   const wrapper = shallow(<Select isSearchable disabled options={optionsMock} onChange={onChangeMock} />);

  //   wrapper.props().toggle.props.onChange({ target: { value: 'en' } });
  //   wrapper.find(SelectItem).simulate('click');
  //   wrapper.update();

  //   expect(onChangeMock).not.toBeCalled();
  // });

  // FIXME: wrong state
  // it('changes arrow style onFocus', () => {
  //   const onChangeMock = jest.fn();
  //   const wrapper = shallow(<Select isSearchable disabled options={optionsMock} onChange={onChangeMock} />);
  //   const getSelectArrowProps = () => wrapper.props().toggle.props.after.props;

  //   wrapper.props().toggle.props.onFocus();
  //   expect(getSelectArrowProps().active).toBe(true);

  //   wrapper.props().toggle.props.onBlur();
  //   expect(getSelectArrowProps().active).toBe(false);
  // });

  describe('onKeyDownHandler', () => {
    const wrapper = shallow(<Select isSearchable options={optionsMock} />);

    // FIXME: wrong state
    // it('opens when enter ArrowDown', () => {
    //   wrapper.simulate('keyDown', { key: 'ArrowDown' });
    //   expect(wrapper.find(Dropdown).props().isOpen).toBe(true);
    // });

    // FIXME: wrong state
    // it('focus first SelectItem on enter ArrowDown when it is open', () => {
    //   wrapper.simulate('keyDown', { key: 'ArrowDown' });
    //   expect(
    //     wrapper
    //       .find(SelectItem)
    //       .first()
    //       .props().focused
    //   ).toBe(true);
    // });

    // FIXME: wrong state
    // it('focus lastElement SelectItem on enter ArrowUp when firstElement focused', () => {
    //   wrapper.simulate('keyDown', { key: 'ArrowUp' });
    //   expect(
    //     wrapper
    //       .find(SelectItem)
    //       .last()
    //       .props().focused
    //   ).toBe(true);
    // });

    // FIXME: wrong state
    // it('focus penultimate   SelectItem on enter ArrowUp when lastElement focused', () => {
    //   wrapper.simulate('keyDown', { key: 'ArrowUp' });
    //   expect(
    //     wrapper
    //       .find(SelectItem)
    //       .at(optionsMock.length - 2)
    //       .props().focused
    //   ).toBe(true);
    // });

    // FIXME: wrong state
    // it('changes value onEnter', () => {
    //   wrapper.simulate('keyDown', { key: 'Enter', preventDefault: jest.fn() });
    //   expect(wrapper.props().toggle.props.value).toBe(optionsMock[optionsMock.length - 2].label);
    // });

    it('closes when enter Escape', () => {
      wrapper.simulate('keyDown', { key: 'ArrowDown' });
      wrapper.simulate('keyDown', { key: 'Escape' });
      expect(wrapper.find(Dropdown).props().isOpen).toBe(false);
    });
  });

  describe('Select reducer', () => {
    it('throws error on unexpected dispatch type', () => {
      expect(() => reducer({}, { type: 'some unexpected' })).toThrowError();
    });
  });
});
