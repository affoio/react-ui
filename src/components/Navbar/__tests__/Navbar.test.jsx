import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';
import NavbarItem from '../NavbarItem';
import NavbarSection from '../NavbarSection';
import { NavbarContent } from '../NavbarContent';
import NavbarItemList from '../NavbarItemList';
import { withProviders } from '../../../helpers/testHelpers';
import colors from '../../../colors';
import NavbarToggle from '../NavbarToggle';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        withProviders(
          <Navbar>
            <NavbarSection>
              <NavbarItemList
                header="Dashboard"
                paths={[{ path: '/login', external: true, name: 'login' }, { path: '/forgot', name: 'forgot' }]}
              />
            </NavbarSection>
            <NavbarItem to="/singup">signup</NavbarItem>
          </Navbar>
        )
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('<NavbarItemList>', () => {
    it('toggles content', () => {
      const wrapper = mount(
        withProviders(
          <NavbarItemList
            header="Dashboard"
            paths={[{ path: '/login', external: true, name: 'login' }, { path: '/forgot', name: 'forgot' }]}
          />
        )
      );
      expect(toJSON(wrapper.find(NavbarContent).render())).toHaveStyleRule('display', 'none');

      wrapper.simulate('click');
      expect(toJSON(wrapper.find(NavbarContent).render())).toHaveStyleRule('display', 'block');
    });

    it('has active color when path matches', () => {
      const wrapper = mount(
        withProviders(
          <NavbarItemList
            header="Dashboard"
            paths={[{ path: '/login', external: true, name: 'login' }, { path: '/forgot', name: 'forgot' }]}
          />,
          ['/login']
        )
      );

      expect(toJSON(wrapper.find(NavbarToggle).render())).toHaveStyleRule('color', colors.indigoBlue[800]);
    });
  });
});
