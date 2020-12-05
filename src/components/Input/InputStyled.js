import styled from 'styled-components';
import colors from '../../colors';
import { addStyleIfPropTruly } from '../../helpers/styledComponents';

export const InputStyled = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  font-size: inherit;
  max-width: 100%;
  width: 100%;

  &::placeholder {
    color: ${colors.black[400]};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }

  ${addStyleIfPropTruly('readOnly', 'cursor: pointer;')}
`;
