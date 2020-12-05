import styled, { withTheme } from 'styled-components';
import React from 'react';
import { omit } from 'ramda';
import Box from './Box';
import { addFlexStyles, useMediaQuery, addRowPropStyle } from './utils/styles';
import { rowProps } from './Row';

const FlexStyled = styled(props => <Box {...omit([...rowProps, 'wrap', 'theme'], props)} />)`
  display: flex;
  ${addFlexStyles}
  ${addRowPropStyle('wrap', 'flex-wrap: wrap')}
`;

const Flex = props => {
  const { theme } = props;
  const mediaQuery = useMediaQuery(theme);

  return <FlexStyled {...{ ...props, mediaQuery }} />;
};

export default withTheme(Flex);
