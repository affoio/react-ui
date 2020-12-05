import React, { useReducer, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { bool, arrayOf, string, func, shape, number, oneOfType } from 'prop-types';
import { isEmpty } from 'ramda';

import Dropdown from '../Dropdown/Dropdown';
import SelectArrow from './SelectArrow';
import SelectItem from './SelectItem';
import SelectNoOptions from './SelectNoOptions';
import SelectOptions from './SelectOptions';
import SelectButton from './SelectButton';
import Input from '../Input/Input';
import { scrollIntoView } from '../../helpers/scrollIntoView';
import { useDebounce } from '../../helpers/hooks';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        value: action.value,
        label: action.label,
        isOpen: false,
        filterValue: null,
        selectedOption: action,
      };
    case 'open':
      return { ...state, isOpen: true };
    case 'close':
      return { ...state, isOpen: false, filterValue: null };
    case 'changeFilterValue':
      return {
        ...state,
        filterValue: action.value,
        isOpen: true,
        focusedOption: action.value ? 0 : state.focusedOption,
      };
    case 'focusOption':
      return { ...state, focusedOption: action.value };
    default:
      throw new Error();
  }
};

const propTypes = {
  options: arrayOf(
    shape({
      label: string,
      value: oneOfType([string, number]),
    })
  ).isRequired,
  disabled: bool,
  label: string,
  error: string,
  helperText: string,
  onChange: func,
  placeholder: string,
  defaultValue: shape({
    label: string,
    value: oneOfType([string, number]),
  }),
  isSearchable: bool,
  hoverable: bool,
  inverse: bool,
};

const getDefaultValueLabel = (defaultValue, options) => {
  if (defaultValue.value && !defaultValue.label) {
    return options.find(option => option.value === defaultValue.value).label;
  }

  return defaultValue.label;
};

const getDefaultValueIndex = (defaultValue, options) => {
  return options.findIndex(option => option.value === defaultValue.value && option.label === defaultValue.label);
};

const defaultProps = {
  defaultValue: {},
  selectedValue: {},
  defaultOptions: [],
};

const Select = props => {
  const {
    options = defaultProps.defaultOptions,
    disabled,
    label,
    error,
    inline,
    hoverable,
    toggle,
    selectedValue = defaultProps.selectedValue,
    inverse,
  } = props;
  const { helperText, onChange, placeholder, defaultValue = defaultProps.defaultValue, isSearchable, option } = props;
  const { onChangeFocusedOption, focusedValue } = props;
  const [state, dispatch] = useReducer(reducer, {
    value: defaultValue.value,
    label: getDefaultValueLabel(defaultValue, options),
    isOpen: false,
    filterValue: null,
    focusedOption: getDefaultValueIndex(defaultValue, options),
    selectedOption: defaultValue,
  });

  const { isOpen, filterValue, focusedOption, selectedOption } = state;
  const selectedElementRef = useRef();
  const contentRef = useRef();
  const emptyRef = useRef();
  const mainSelectedOption = isEmpty(selectedValue) ? selectedOption : selectedValue;
  const mainFocusedOption = typeof focusedValue !== 'undefined' ? focusedValue : focusedOption;
  const [focused, changeFocus] = useState(false);
  const dispatchFocus = useCallback(
    idx => {
      if (onChangeFocusedOption) {
        onChangeFocusedOption(idx);
      }
      dispatch({ type: 'focusOption', value: idx });
    },
    [onChangeFocusedOption]
  );
  useEffect(() => {
    if (selectedElementRef.current) {
      scrollIntoView(contentRef.current, selectedElementRef.current);
    }
  }, [isOpen, focusedOption, mainSelectedOption, focusedValue]);

  const onClickHandler = useCallback(
    (item, index) => () => {
      if (!disabled) {
        dispatch({ type: 'change', ...item });
        dispatchFocus(index);
        if (onChange) {
          onChange(item);
        }
      }
    },
    [disabled, dispatchFocus, onChange]
  );
  const toggleHandler = useCallback(() => {
    if (!disabled && !isOpen) {
      dispatch({ type: 'open' });
    }
  }, [disabled, isOpen]);

  const closeHandler = useCallback(() => dispatch({ type: 'close' }), []);
  const inputValue = filterValue === null ? state.label || '' : filterValue;
  const filteredOptions = state.filterValue
    ? options.filter(optionItem => optionItem.label.toLowerCase().indexOf(state.filterValue.toLowerCase()) > -1)
    : options;

  const inputChangeHandler = useCallback(
    e =>
      dispatch({
        type: 'changeFilterValue',
        value: e.target.value,
      }),
    []
  );
  const inputFocusHandler = useCallback(() => {
    changeFocus(true);
    toggleHandler();
  }, [toggleHandler]);
  const inputBlurHandler = useCallback(() => changeFocus(false), []);
  const memorizedSelectArrow = useMemo(() => <SelectArrow isOpen={isOpen} active={focused} />, [focused, isOpen]);
  const onKeyDownHandler = useCallback(
    e => {
      if (e.key === 'ArrowDown') {
        if (!isOpen) {
          dispatch({ type: 'open' });
        } else {
          dispatchFocus((mainFocusedOption + 1) % filteredOptions.length);
        }
      }

      if (isOpen) {
        if (e.key === 'ArrowUp') {
          dispatchFocus(mainFocusedOption > 0 ? mainFocusedOption - 1 : filteredOptions.length - 1);
        }
        if (e.key === 'Enter') {
          e.preventDefault();

          dispatch({
            type: 'change',
            ...filteredOptions[focusedOption],
          });
          dispatchFocus(focusedOption);

          if (onChange) {
            onChange(filteredOptions[focusedOption]);
          }
        }
        if (e.key === 'Escape') {
          dispatch({
            type: 'close',
          });
        }
      }
    },
    [dispatchFocus, filteredOptions, focusedOption, isOpen, mainFocusedOption, onChange]
  );
  const onMouseOverHandler = useCallback(() => {
    if (hoverable) {
      dispatch({ type: 'open' });
    }
  }, [hoverable]);

  const onMouseOutHandler = useCallback(() => {
    if (hoverable) {
      dispatch({ type: 'close' });
    }
  }, [hoverable]);
  const toggleComponent = inline ? (
    <SelectButton inverse={inverse} after={memorizedSelectArrow} onFocus={inputFocusHandler} onBlur={inputBlurHandler}>
      {inputValue || placeholder}
    </SelectButton>
  ) : (
    <Input
      {...{ disabled, label, error, helperText, placeholder }}
      after={memorizedSelectArrow}
      readOnly={!isSearchable}
      value={inputValue}
      onChange={inputChangeHandler}
      onFocus={inputFocusHandler}
      onBlur={inputBlurHandler}
    />
  );

  const memorizedOptions = useMemo(
    () => (
      <SelectOptions ref={contentRef} inline={inline}>
        {filteredOptions.length ? (
          filteredOptions.map((item, index) => {
            const isChecked = mainSelectedOption.value === item.value && mainSelectedOption.label === item.label;
            const isFocused = mainFocusedOption === index;
            const onClick = onClickHandler(item, index);
            const ref = isFocused ? selectedElementRef : emptyRef;
            const key = `${item.value}${item.label}`;

            return option ? (
              option({ checked: isChecked, focused: isFocused, onClick, option: item, inline, key, ref })
            ) : (
              <SelectItem key={key} checked={isChecked} focused={isFocused} onClick={onClick} inline={inline} ref={ref}>
                {item.label}
              </SelectItem>
            );
          })
        ) : (
          <SelectNoOptions>No options</SelectNoOptions>
        )}
      </SelectOptions>
    ),
    [
      filteredOptions,
      inline,
      mainFocusedOption,
      mainSelectedOption.label,
      mainSelectedOption.value,
      onClickHandler,
      option,
    ]
  );
  const debouncedIsOpen = useDebounce(isOpen, 300);
  const isOpenSelect = hoverable ? debouncedIsOpen : isOpen;

  return (
    <Dropdown
      isOpen={isOpenSelect}
      onToggle={toggleHandler}
      onClickOutside={closeHandler}
      toggle={
        toggle
          ? toggle({
              onFocus: inputFocusHandler,
              onBlur: inputBlurHandler,
              value: inputValue || placeholder,
              selectedOption: mainSelectedOption,
              arrow: memorizedSelectArrow,
              focused,
              error,
              label,
              placeholder,
            })
          : toggleComponent
      }
      inline={inline}
      onKeyDown={onKeyDownHandler}
      onMouseOut={onMouseOutHandler}
      onMouseOver={onMouseOverHandler}
    >
      {memorizedOptions}
    </Dropdown>
  );
};

Select.propTypes = propTypes;

export default React.memo(Select);
