import React, { useState } from 'react';
import { string, func, bool, element } from 'prop-types';
import { omit } from 'ramda';
import { InputStyled } from './InputStyled';
import Control from '../Control/Control';
import InputAddon from './InputAddon';

export const defaultProps = {
  type: 'text',
  defaultValue: '',
};

export const propTypes = {
  error: string,
  label: string,
  helperText: string,
  onFocus: func,
  onBlur: func,
  disabled: bool,
  onChange: func,
  defaultValue: string,
  before: element,
  after: element,
  type: string,
  readOnly: bool,
};

const Input = React.forwardRef((props, ref) => {
  const { value, defaultValue, error, label, helperText, disabled } = props;
  const { onChange, onFocus, onBlur, before, after, readOnly, beforeAddon } = props;
  const { wrapperStyles } = props;
  const [stateValue, changeValue] = useState(defaultValue);
  const [focused, changeFocus] = useState(false);
  const inputValue = typeof value !== 'undefined' ? value : stateValue;
  const onFocusHandler = e => {
    if (onFocus) {
      onFocus(e);
    }

    changeFocus(true);
  };

  const onBlurHandler = e => {
    if (onBlur) {
      onBlur(e);
    }

    changeFocus(false);
  };

  const onChangeHandler = e => {
    if (onChange) {
      onChange(e);
    }

    changeValue(e.target.value);
  };

  return (
    <Control
      {...{ disabled, label, error, focused, helperText }}
      fullWidth
      before={beforeAddon || (before && <InputAddon>{before}</InputAddon>)}
      after={after && <InputAddon position="right">{after}</InputAddon>}
      wrapperStyles={wrapperStyles}
    >
      <InputStyled
        {...omit(['defaultValue'], props)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={inputValue}
        readOnly={readOnly}
        ref={ref}
      />
    </Control>
  );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default React.memo(Input);
