import React from 'react';
import styled from 'styled-components';

import { ControlLabel, HelperText } from './ControlText';
import ControlWrapper from './ControlWrapper';
import ControlContainer from './ControlContainer';

const ControlContent = styled.div`
  flex-grow: 1;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Control = props => {
  const { disabled, label, error, focused, after, before, helperText, fullWidth, children, onWrapperClick } = props;
  const { wrapperStyles, onFocus, onBlur, tabIndex } = props;

  return (
    <ControlContainer {...{ fullWidth, disabled }} onBlur={onBlur} onFocus={onFocus} tabIndex={tabIndex}>
      {label && (
        <ControlLabel focused={focused} error={!!error}>
          {label}
        </ControlLabel>
      )}
      <ControlWrapper wrapperStyles={wrapperStyles} error={error} focused={focused} onClick={onWrapperClick}>
        {before}
        <ControlContent>{children}</ControlContent>
        {after}
      </ControlWrapper>

      <HelperText error={error}>
        {!!error && error}
        {helperText && !error && helperText}
      </HelperText>
    </ControlContainer>
  );
};

export default Control;
