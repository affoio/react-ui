import React from 'react';
import styled from 'styled-components';
import { bool, oneOf } from 'prop-types';
import { DotWrapper } from './Dot';

const SpinStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const spinProps = {
  show: bool,
  use: oneOf(['primary', 'secondary', 'tertiary']),
  inverse: bool,
};

const Spin = ({ show, children, use, inverse }) => {
  if (!show) {
    return <>{children}</>;
  }
  return (
    <SpinStyled>
      {children}
      <DotWrapper {...{ inverse, use }}>
        {DotItem => (
          <>
            <DotItem />
            <DotItem />
            <DotItem />
          </>
        )}
      </DotWrapper>
    </SpinStyled>
  );
};

Spin.propTypes = spinProps;

export default Spin;
