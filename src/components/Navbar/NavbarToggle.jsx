import styled from 'styled-components';
import colors from '../../colors';
import { NavbarItemStyled } from './NavbarItem';

const NavbarToggle = styled(NavbarItemStyled).attrs({ as: 'div' })`
  ${({ isActive }) => isActive && `color: ${colors.indigoBlue[800]}`}
`;

export default NavbarToggle;
