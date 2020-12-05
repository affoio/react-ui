import styled from 'styled-components';
import { oneOf } from 'prop-types';
import colors from '../../colors';
import { getTypographyFontSizeStyles } from '../../theme/selectors';

const getLabelColor = ({ focused, error }) => {
  if (focused) {
    return error ? colors.cerise[800] : colors.indigoBlue[800];
  }

  return colors.black[800];
};

const getHelperColor = ({ error }) => {
  return error ? colors.cerise[800] : colors.black[500];
};

const AdditionalText = styled.div`
  ${({ theme }) => getTypographyFontSizeStyles(theme, 100)}
  box-sizing: border-box;
  line-height: 10px;
  padding-left: 16px;
  ${({ position }) => (position === 'top' ? 'padding-bottom: 6px' : 'padding-top: 6px;')};
`;

AdditionalText.propTypes = {
  position: oneOf(['top', 'bottom']),
};

export const ControlLabel = styled(AdditionalText).attrs({
  position: 'top',
})`
  color: ${getLabelColor};
`;

export const HelperText = styled(AdditionalText).attrs({
  position: 'bottom',
})`
  color: ${getHelperColor};
  height: 16px;
`;
