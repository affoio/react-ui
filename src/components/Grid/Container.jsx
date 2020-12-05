import React from 'react';
import styled, { withTheme } from 'styled-components';
import { bool } from 'prop-types';
import {
  getBaseIndent,
  getBreakpoints,
  getContainerIndents,
  getContainerMaxWidth,
  getGutterWidth,
} from '../../theme/selectors';
import { mediaQueryFunctionsList } from '../../theme/helpers';

const createMediaQueries = (indents, media) => {
  return Object.keys(indents).map(breakpoint => {
    return media[breakpoint]`
        padding-left: ${indents[breakpoint]}px;
        padding-right: ${indents[breakpoint]}px;
      `;
  });
};

const ContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${({ theme }) => getContainerMaxWidth(theme)};
  margin-left: auto;
  margin-right: auto;

  ${({ fullWidth, mediaQuery, theme }) => {
    const fullWidthPadding = `${getBaseIndent(theme) * getGutterWidth(theme)}px`;
    return fullWidth
      ? `
      padding-left: ${fullWidthPadding};
      padding-right: ${fullWidthPadding};
    `
      : mediaQuery;
  }}
`;

const propTypes = {
  fullWidth: bool,
};

const Container = props => {
  const { children, fullWidth, theme, className } = props;

  const mediaQuery = React.useMemo(() => {
    const baseIndent = getBaseIndent(theme);
    const containerIndents = getContainerIndents(theme);
    const breakPoints = getBreakpoints(theme);
    const containerIndentsWithBase = Object.keys(containerIndents).reduce((indents, current) => {
      const newIndents = { ...indents };
      newIndents[current] = containerIndents[current] * baseIndent;
      return newIndents;
    }, {});

    return createMediaQueries(containerIndentsWithBase, mediaQueryFunctionsList(breakPoints), baseIndent);
  }, [theme]);

  return <ContainerStyled {...{ fullWidth, mediaQuery, theme, className }}>{children}</ContainerStyled>;
};

Container.propTypes = propTypes;

export default withTheme(Container);
