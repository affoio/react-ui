import styled from 'styled-components';
import Button from '../Button/Button';
import colors from '../../colors';
import { getMultipliedIndent } from '../../theme/selectors';

const getInverseStyle = ({ inverse }) => (inverse ? colors.white : colors.black[800]);

const SelectButton = styled(Button).attrs({
  use: 'tertiary',
})`
  padding: ${({ theme }) => `0 ${getMultipliedIndent(theme, 4)}`};
  color: ${getInverseStyle};
  height: 40px;
  line-height: 40px;

  &:hover {
    color: ${colors.black[800]};
    background-color: ${colors.black[100]};
  }

  &:focus {
    color: ${colors.black[800]};
    background-color: ${colors.white};
  }
`;

export default SelectButton;
