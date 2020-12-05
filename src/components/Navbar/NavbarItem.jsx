import React from 'react';

import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../colors';
import { getMultipliedIndent, getTypographyFontSizeStyles } from '../../theme/selectors';
import { NavbarContent } from './NavbarContent';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

const activeClassName = 'nav-item-active';

const activeStyles = `
    color: ${colors.indigoBlue[800]};
    background-color: ${colors.indigoBlue[100]};
  `;

export const NavbarItemStyled = styled.a.attrs({
  activeClassName,
})`
  height: 48px;
  display: flex;
  align-items: center;
  color: ${colors.black[500]};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  
  ${({ theme }) => css`
    ${getTypographyFontSizeStyles(theme, 200)};
    padding-left: ${getMultipliedIndent(theme, 15)};
    padding-right: ${getMultipliedIndent(theme, 5)};

    ${NavbarContent} & {
      padding-left: ${getMultipliedIndent(theme, 19)};
    }
  `}

  &:hover,
  &.${activeClassName} {
    ${activeStyles}
  }

  ${addStyleIfPropTruly('active', activeStyles)};
`;

const NavbarItem = props => {
  const { external, to, as, children, onClick, active } = props;
  return (
    <NavbarItemStyled
      as={as || external ? 'a' : NavLink}
      to={to}
      onClick={onClick}
      href={external ? to : undefined}
      active={active}
    >
      {children}
    </NavbarItemStyled>
  );
};

export default NavbarItem;
