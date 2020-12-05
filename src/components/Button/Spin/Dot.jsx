import React from 'react';
import styled from 'styled-components';
import { func, bool } from 'prop-types';

import colors from '../../../colors';

const cssDotAnimation = 'pulse 1s ease-in infinite alternate';
const delay = 0.33;

const getThemeStyle = ({ use, inverse }) => {
  switch (use) {
    case 'secondary':
      return `
        background: ${inverse ? colors.white : colors.cerise[800]};
      `;
    case 'tertiary':
      return `background: ${inverse ? colors.white : colors.indigoBlue[800]};`;
    default:
      return `background: ${colors.white};`;
  }
};

const Dot = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 4px;
  &:nth-child(1) {
    animation: ${cssDotAnimation};
  }
  &:nth-child(2) {
    animation: ${cssDotAnimation};
    animation-delay: ${delay}s;
  }
  &:nth-child(3) {
    animation: ${cssDotAnimation};
    animation-delay: ${2 * delay}s;
  }

  @keyframes pulse {
    from,
    40% {
      opacity: 0.5;
    }
    80%,
    to {
      opacity: 1;
    }
  }
  ${getThemeStyle}
`;

const DotWrapperStyled = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 50px;
`;

const DotWrapperProps = {
  children: func,
  inverse: bool,
};

export const DotWrapper = ({ children, use, inverse }) => {
  return (
    <DotWrapperStyled>
      {children(() => (
        <Dot {...{ inverse, use }} />
      ))}
    </DotWrapperStyled>
  );
};

DotWrapper.propTypes = DotWrapperProps;
