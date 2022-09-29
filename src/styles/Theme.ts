import { createGlobalStyle } from 'styled-components';

const colors = {
  main: '#5162FF',
  lightGray: '#EFEFEF',
  gray: '#707070',
  white: '#FFFFFF'
};

export const DefaultTheme = {
  colors
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  div, p, h1, h2, h3, h4 {
    margin: 0;
    padding: 0
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export type ColorsType = typeof colors;

export default { DefaultTheme, GlobalStyle };
