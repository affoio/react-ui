import styled from 'styled-components';
import colors from '../../colors';
import { getTypographyFontSizeStyles, getMultipliedIndent } from '../../theme/selectors';

const DialCode = styled.span`
  ${({ theme }) => getTypographyFontSizeStyles(theme, 100)};
  color: ${colors.black[500]};
  margin: 0 ${({ theme }) => getMultipliedIndent(theme, 2)};
`;

export default DialCode;
