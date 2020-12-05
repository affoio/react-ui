import { Normalize } from 'styled-normalize';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import Test from './components/Test';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ baseIndent: 4 }}>
        <>
          <GlobalStyle />
          <Normalize />
          <Route component={Test} />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
