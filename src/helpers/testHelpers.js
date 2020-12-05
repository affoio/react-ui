import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';

import { MemoryRouter } from 'react-router';

export const renderWithThemeProvider = (children, theme = {}) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const withProviders = (component, initialEntries, theme = {}) => (
  <MemoryRouter initialEntries={initialEntries}>
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  </MemoryRouter>
);
