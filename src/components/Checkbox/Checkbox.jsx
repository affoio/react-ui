import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { bool, string, func, oneOfType, element } from 'prop-types';
import colors from '../../colors';

import CheckboxWrapper from './CheckboxWrapper';
import CheckboxLabel from './CheckboxLabel';
import { getMultipliedIndentFromProp } from '../../theme/selectors';
import check from './img/check.svg';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

const CheckboxStyled = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  min-width: 18px;
  border: 2px solid ${colors.indigoBlue[800]};
  border-radius: 2px;
  box-sizing: border-box;
  margin-right: ${getMultipliedIndentFromProp(2)};
  transition: background-color 0.3s ease-out;

  ${({ checked, disabled }) =>
    !checked &&
    !disabled &&
    css`
      ${CheckboxWrapper}:hover & {
        background-color: ${colors.indigoBlue[200]};
      }
    `}

  ${addStyleIfPropTruly(
    'checked',
    `
      background-color: ${colors.indigoBlue[800]};
      background-image: url(${check});
      background-repeat: no-repeat;
      background-position: center;
    `
  )}
  ${addStyleIfPropTruly('error', `border: 2px solid ${colors.cerise[800]};`)}
`;

const propTypes = {
  defaultChecked: bool,
  label: oneOfType([string, element]),
  disabled: bool,
  onChange: func,
  error: oneOfType([string, bool]),
};

const Checkbox = ({ defaultChecked = false, label, disabled, onChange, error }) => {
  const [checked, changeCheck] = useState(defaultChecked);
  const checkboxClickHandler = () => {
    if (!disabled) {
      changeCheck(!checked);
      if (onChange) {
        onChange(!checked);
      }
    }
  };

  return (
    <CheckboxWrapper onClick={checkboxClickHandler} disabled={disabled}>
      <CheckboxStyled {...{ checked, disabled, error }} />
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = propTypes;

export default Checkbox;
