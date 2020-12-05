import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import CloseEyeIcon from '../Icon/CloseEyeIcon';
import OpenEyeIcon from '../Icon/OpenEyeIcon';
import colors from '../../colors';

const SwitchEyeStyled = styled.div`
  cursor: pointer;
`;

export const SwitchEye = ({ onClick, type }) => {
  return (
    <SwitchEyeStyled onClick={onClick}>
      {type === 'password' ? (
        <CloseEyeIcon color={colors.black[400]} hoverColor={colors.black[600]} />
      ) : (
        <OpenEyeIcon color={colors.black[400]} hoverColor={colors.black[600]} />
      )}
    </SwitchEyeStyled>
  );
};

const InputPassword = props => {
  const [type, changeType] = useState('password');
  const AfterComponent = (
    <SwitchEye type={type} onClick={() => changeType(prevType => (prevType === 'password' ? 'text' : 'password'))} />
  );

  return <Input {...props} type={type} after={AfterComponent} />;
};

export default InputPassword;
