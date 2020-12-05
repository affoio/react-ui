import { createGlobalStyle } from 'styled-components';
import { fontStyles } from './fonts/font';

export const GlobalStyle = createGlobalStyle`
  ${fontStyles}
  body {
    font-family: 'AvenirNext', Arial, Helvetica, sans-serif;
  }
`;
