import styled from 'styled-components';
import Button from '../Button/Button';
import colors from '../../colors';
import { getMultipliedIndent } from '../../theme/selectors';

const InputPhoneButton = styled(Button).attrs({
  use: 'tertiary',
})`
  padding: ${({ theme }) => `0 ${getMultipliedIndent(theme, 4)}`};
  color: ${colors.black[800]};
  height: 56px;
  line-height: 56px;
  margin-top: -1px;
  border-color: transparent;
  border-right: 1px solid ${colors.black[300]};
  margin-right: ${({ theme }) => `${getMultipliedIndent(theme, 4)}`};

  &:hover {
    color: indianred;
    background-color: transparent;
  }

  &:focus {
    color: indianred;
    background-color: transparent;
  }
`;

export default InputPhoneButton;
