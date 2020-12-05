import React from 'react';
import { shallow } from 'enzyme';

import Control from '../Control';
import { HelperText } from '../ControlText';

describe('<Control>', () => {
  it('doesnt render helperText with error', () => {
    const wrapper = shallow(<Control helperText="Some helper text" error="Alert" />);

    expect(wrapper.find(HelperText).text()).toBe('Alert');
  });
  it('render helperText with error', () => {
    const wrapper = shallow(<Control helperText="Some helper text" />);

    expect(wrapper.find(HelperText).text()).toBe('Some helper text');
  });
});
