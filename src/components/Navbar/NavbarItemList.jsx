import React, { useState, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { NavbarContent } from './NavbarContent';
import NavbarToggle from './NavbarToggle';
import NavbarItem from './NavbarItem';
import SelectArrow from '../Select/SelectArrow';

const NavbarItemList = ({ header, paths, location, onClick, withoutLinks }) => {
  const isActive = useMemo(() => !withoutLinks && !!paths.find(({ path }) => location.pathname === path), [
    location.pathname,
    paths,
    withoutLinks,
  ]);
  const [isOpen, changeOpen] = useState(isActive);
  const onClickHandler = onItemClick => () => {
    changeOpen(false);

    if (onItemClick) {
      onItemClick();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <NavbarToggle isActive={isActive} onClick={() => changeOpen(!isOpen)}>
        {header}
        <SelectArrow isOpen={isOpen} />
      </NavbarToggle>
      <NavbarContent isOpen={isOpen}>
        {paths.map(({ path, external, name, active, ...other }) => (
          <NavbarItem
            as={withoutLinks && 'div'}
            key={`${path}${name}`}
            to={path}
            external={external}
            onClick={onClickHandler(other.onClick)}
            active={active}
          >
            {name}
          </NavbarItem>
        ))}
      </NavbarContent>
    </>
  );
};

export default withRouter(NavbarItemList);
