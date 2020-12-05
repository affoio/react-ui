import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { css } from 'styled-components';
import { pipe } from 'ramda';
import Input from './Input';
import Select from '../Select/Select';
import InputPhoneButton from './InputPhoneButton';
import countries from './countries/countries';
import Flag from '../Flag/Flag';
import SelectItem from '../Select/SelectItem';
import DialCode from './DialCode';
import ComponentAddon from '../ComponentAddon/ComponentAddon';

const guessSelectedCountry = (inputNumber, onlyCountries, defaultCountry) => {
  if (inputNumber.trim() === '') return defaultCountry;

  const bestGuess = onlyCountries.reduce(
    (selectedCountry, country) => {
      if (inputNumber.startsWith(country.value)) {
        if (country.value.length > selectedCountry.value.length) {
          return country;
        }
        if (country.value.length === selectedCountry.value.length && country.priority < selectedCountry.priority) {
          return country;
        }
      }
      return selectedCountry;
    },
    { value: '', priority: 10001 }
  );

  if (!bestGuess.value) return defaultCountry || { value: '' };

  return bestGuess;
};

export const defaultDialCode = '+44';
const defaultSelectValue = defaultNumber => {
  const findOption = guessSelectedCountry(defaultNumber, countries);
  const findOptionIndex = countries.findIndex(
    option => findOption.value === option.value && option.priority === findOption.priority
  );

  return {
    option: findOption,
    index: findOptionIndex,
  };
};

const wrapperStyles = css`
  padding-left: 0;
`;

const addLeadingPlusIfEmpty = num => (num.length ? num : '+');
const updateValueOnlyIfMatch = value => num => (num.match(/^\+[0-9]*$/) ? num : value);

const normalizePhoneValue = (value, prevValue) => {
  const updatePrevValue = updateValueOnlyIfMatch(prevValue);

  return pipe(
    addLeadingPlusIfEmpty,
    updatePrevValue
  )(value);
};

const ToggleComponent = ({ selectedOption, arrow, ...other }) => (
  <InputPhoneButton after={arrow} {...other}>
    <Flag country={selectedOption.iso2} />
  </InputPhoneButton>
);

const OptionComponent = ({ option, ...otherOptionProps }) => (
  <SelectItem {...otherOptionProps}>
    <ComponentAddon marginSize={4}>
      <Flag country={option.iso2} />
    </ComponentAddon>
    <div>
      {option.label}
      <DialCode>{option.value}</DialCode>
    </div>
  </SelectItem>
);

const BeforeComponent = React.memo(
  ({ onChange, selectedValue = {}, defaultValue, focusedValue, onChangeFocusedOption }) => (
    <Select
      toggle={ToggleComponent}
      option={OptionComponent}
      onChange={onChange}
      options={countries}
      selectedValue={selectedValue}
      defaultValue={defaultValue}
      focusedValue={focusedValue}
      onChangeFocusedOption={index => onChangeFocusedOption(index)}
      inline
    />
  )
);

const InputPhone = props => {
  const { country, onChangeCountry, onChange, defaultValue, ...otherProps } = props;
  const finalDefaultValue = defaultValue || defaultDialCode;
  const defaultOptionValue = useMemo(() => defaultSelectValue(finalDefaultValue), [finalDefaultValue]);
  const [value, changeValue] = useState(finalDefaultValue);
  const [selectedValue, onChangeSelectedValue] = useState(defaultOptionValue.option);
  const [focusedValue, onChangeFocusedValue] = useState(defaultOptionValue.index);
  const optionFromCountry = country ? countries.find(option => option.iso2 === country) : null;
  const optionFromCountryIndex = country ? countries.findIndex(option => option.iso2 === country) : null;

  const mainSelectedValue = optionFromCountry || selectedValue;
  const onChangeHandler = useCallback(
    e => {
      const number = normalizePhoneValue(e.target.value, value);
      if (number !== value) {
        changeValue(number);

        const findOption = guessSelectedCountry(number, countries, mainSelectedValue);
        const findOptionIndex = countries.findIndex(
          option => findOption.value === option.value && option.priority === findOption.priority
        );
        if (onChangeCountry) {
          onChangeCountry(findOption);
        }
        onChangeSelectedValue(findOption || mainSelectedValue);
        if (findOptionIndex > -1) {
          onChangeFocusedValue(findOptionIndex);
        }
        if (onChange) {
          onChange(number);
        }
      }
    },
    [mainSelectedValue, onChange, onChangeCountry, value]
  );

  const inputRef = useRef();

  const onSelectHandler = useCallback(
    option => {
      changeValue(option.value);
      onChangeSelectedValue(option);
      if (onChangeCountry) {
        onChangeCountry(option);
      }
      inputRef.current.focus();
    },
    [onChangeCountry]
  );

  useEffect(() => {
    if (optionFromCountry) {
      changeValue(optionFromCountry.value);
      onChangeSelectedValue(optionFromCountry);
      onChangeFocusedValue(optionFromCountryIndex);
    }
  }, [country, optionFromCountry, optionFromCountryIndex]);

  return (
    <Input
      {...otherProps}
      onChange={onChangeHandler}
      wrapperStyles={wrapperStyles}
      maxLength={20}
      beforeAddon={
        <BeforeComponent
          selectedValue={mainSelectedValue}
          focusedValue={focusedValue}
          defaultValue={defaultOptionValue.option}
          onChange={onSelectHandler}
          onChangeFocusedOption={onChangeFocusedValue}
        />
      }
      value={value}
      ref={inputRef}
    />
  );
};

export default InputPhone;
