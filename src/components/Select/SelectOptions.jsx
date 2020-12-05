import React from 'react';
import styled from 'styled-components';
import { getMultipliedIndent } from '../../theme/selectors';
import colors from '../../colors';

const SelectOptionsStyled = styled.div`
  max-height: ${({ theme }) => getMultipliedIndent(theme, 61)};
  padding: ${({ theme }) => getMultipliedIndent(theme, 2)} 0;
  margin-top: ${({ theme, inline }) => {
    const margin = getMultipliedIndent(theme, 2);
    if (!inline) {
      return `-${margin}`;
    }
    return margin;
  }};
  overflow: auto;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
`;

const SelectOptions = React.forwardRef((props, ref) => <SelectOptionsStyled {...props} ref={ref} />);

export default SelectOptions;
