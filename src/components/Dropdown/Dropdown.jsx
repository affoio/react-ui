import React, { useState, useRef, useEffect, useCallback } from 'react';
import { bool, func, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { when, isNil } from 'ramda';
import { useOnClickOutside, useDebounce } from '../../helpers/hooks';

const DropdownContainer = styled.div`
  position: relative;
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: column;
  max-width: 100%;
`;

export const DropdownToggle = styled.div`
  position: relative;
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: column;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  width: ${({ inline }) => (inline ? 'auto' : '100%')};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${({ position }) => {
    if (position === 'top') {
      return css`
        bottom: 100%;
      `;
    }

    return css`
      top: 100%;
    `;
  }}
  z-index: 11;
`;

const propTypes = {
  disabled: bool,
  toggle: node.isRequired,
  children: node.isRequired,
  inline: bool,
  onToggle: func,
  isOpen: bool,
  onClickOutside: func,
  hoverable: bool,
};

const Dropdown = props => {
  const { disabled, children, toggle, inline, isOpen, hoverable } = props;
  const { onKeyDown, onClickOutside, onToggle, onMouseOver, onMouseOut } = props;

  const [isOpenState, changeOpen] = useState(false);
  const [position, changePosition] = useState('bottom');

  const ref = useRef();
  const contentRef = useRef();

  const changeOpenIfNotDisabled = when(() => !disabled, changeOpen);
  const changeOpenIfHoverable = when(() => hoverable, changeOpen);
  const toggleHandler = onToggle || (() => changeOpenIfNotDisabled(!isOpenState));
  const onMouseOverHandler = useCallback(() => {
    if (onMouseOver) {
      onMouseOver();
    }
    changeOpenIfHoverable(true);
  }, [changeOpenIfHoverable, onMouseOver]);

  const onMouseOutHandler = useCallback(() => {
    if (onMouseOut) {
      onMouseOut();
    }
    changeOpenIfHoverable(false);
  }, [changeOpenIfHoverable, onMouseOut]);

  useOnClickOutside(ref, onClickOutside || (() => changeOpenIfNotDisabled(false)));
  useEffect(() => {
    const { top } = ref.current.getBoundingClientRect();
    const dropdownHeight = [ref, contentRef].reduce((height, elementRef) => {
      if (elementRef.current) {
        return elementRef.current.offsetHeight + height;
      }
      return height;
    }, 0);
    const offsetBottom = document.documentElement.clientHeight - top;

    if (dropdownHeight > offsetBottom) {
      changePosition('top');
    } else {
      changePosition('bottom');
    }
  }, [isOpen, isOpenState]);

  const isOpenMain = isNil(isOpen) ? isOpenState : isOpen;
  const debouncedIsOpenMain = useDebounce(isOpenMain, 300);
  const isOpenDropdown = hoverable ? debouncedIsOpenMain : isOpenMain;

  return (
    <DropdownContainer
      inline={inline}
      ref={ref}
      onMouseOut={onMouseOutHandler}
      onMouseOver={onMouseOverHandler}
      onKeyDown={onKeyDown}
    >
      <DropdownToggle inline={inline} onClick={toggleHandler}>
        {toggle}
      </DropdownToggle>
      <DropdownContent isOpen={isOpenDropdown} inline={inline} ref={contentRef} position={position}>
        {children}
      </DropdownContent>
    </DropdownContainer>
  );
};

Dropdown.propTypes = propTypes;

export default Dropdown;
