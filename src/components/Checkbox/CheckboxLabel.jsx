import styled from 'styled-components';
import { getTypographyFontSizeStyles } from '../../theme/selectors';

const CheckboxLabel = styled.div`
  display: inline-block;
  ${({ theme }) => getTypographyFontSizeStyles(theme, 300)};
`;

export default CheckboxLabel;
