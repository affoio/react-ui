import styled, { css } from 'styled-components';
import colors from '../../colors';
import { getMultipliedIndent } from '../../theme/selectors';

const NavbarSection = styled.div`
  position: relative;
  ${({ theme }) => css`
    padding-bottom: ${getMultipliedIndent(theme, 6)};
    margin-bottom: ${getMultipliedIndent(theme, 6)};
  `}
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 32px;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${colors.marigold[800]};
    bottom: 0;
    left: 60px;
  }
`;

export default NavbarSection;
