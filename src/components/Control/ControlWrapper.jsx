import styled from 'styled-components';
import colors from '../../colors';
import { getTypographyFontSizeStyles } from '../../theme/selectors';

const ControlWrapper = styled.div`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  background-color: ${colors.black[100]};
  ${({ theme }) => getTypographyFontSizeStyles(theme, 300)}
  color: ${colors.black[800]};
  padding: 0 16px;
  border: 1px solid ${colors.black[100]};
  border-radius: 2px;
  font-weight: 400;
  display: flex;
  align-items: center;

  ${({ error, focused }) =>
    error
      ? `border-color: ${colors.cerise[800]};`
      : focused &&
        `
          border-color: ${colors.indigoBlue[800]};
      `}
  ${({ wrapperStyles }) => wrapperStyles}
`;

export default ControlWrapper;
