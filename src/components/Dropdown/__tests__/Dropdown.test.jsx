import React from 'react';
import { render, fireEvent, cleanup, wait } from 'react-testing-library';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dropdown, { DropdownContent, DropdownToggle } from '../Dropdown';

afterEach(cleanup);
describe('<Dropdown>', () => {
  it('renders with children after click', () => {
    const { queryByText } = render(<Dropdown toggle="click me">Test Text</Dropdown>);
    fireEvent.click(queryByText('click me'));

    expect(queryByText('Test Text'));

    fireEvent.click(queryByText('click me'));
    expect(queryByText('Test Text')).toHaveStyleRule('display: block');
  });

  it('close dropdown after click outside', () => {
    const { queryByText } = render(
      <div>
        <div>another block</div>
        <Dropdown toggle="click me">Test Text</Dropdown>
      </div>
    );

    fireEvent.click(queryByText('click me'));
    expect(queryByText('Test Text')).toHaveStyleRule('display', 'block');

    fireEvent.click(queryByText('another block'));
    expect(queryByText('Test Text')).toHaveStyleRule('display', 'none');
  });

  it('does not open onMouseOver if not hoverable', () => {
    const { queryByText } = render(<Dropdown toggle="click me">Test Text</Dropdown>);
    fireEvent.mouseOver(queryByText('click me'));
    expect(queryByText('Test Text')).toHaveStyleRule('display', 'none');
  });
  it('calls onMouseOut and onMouseOut when it passed', () => {
    const onMouseOut = jest.fn();
    const onMouseOver = jest.fn();
    const { queryByText } = render(
      <Dropdown toggle="click me" onMouseOut={onMouseOut} onMouseOver={onMouseOver} hoverable>
        Test Text
      </Dropdown>
    );
    fireEvent.mouseOver(queryByText('Test Text'));
    fireEvent.mouseOut(queryByText('Test Text'));
    expect(onMouseOut).toBeCalled();
    expect(onMouseOver).toBeCalled();
  });

  it('open onMouseOver if hoverable', async () => {
    const { queryByText } = render(
      <Dropdown toggle="click me" hoverable>
        Test Text
      </Dropdown>
    );
    fireEvent.mouseOver(queryByText('click me'));
    await wait(() => {
      expect(queryByText('Test Text')).toHaveStyleRule('display', 'block');
    });
    fireEvent.mouseOut(queryByText('click me'));

    await wait(() => {
      expect(queryByText('Test Text')).toHaveStyleRule('display', 'none');
    });
  });

  it('renders with inline prop', () => {
    const wrapper = shallow(
      <Dropdown inline toggle="click me">
        Test Text
      </Dropdown>
    );

    wrapper.find(DropdownToggle).simulate('click');

    expect(toJson(wrapper.find(DropdownContent).render())).toHaveStyleRule('width', 'auto');
    expect(toJson(wrapper.find(DropdownToggle).render())).toHaveStyleRule('display', 'inline-flex');
  });

  it('render with position top', () => {
    const wrapper = shallow(<DropdownContent position="top" />);

    expect(toJson(wrapper.render())).toHaveStyleRule('bottom', '100%');
  });
});
