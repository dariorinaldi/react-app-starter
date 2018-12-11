import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${(props) =>
    props.theme.fonts.map(
      (f) => `@font-face: { 
      font-family: ${f.fontFamily}, sans-serif;
      font-weight: ${f.fontWeight};
      font-style: ${f.fontStyle};
      src: url('assets/fonts/${f.fileName}') format(${f.format});
    }`
    )}

  html {
    font-size: ${theme.referenceFontSize || '16px'};
  }

  body {
      margin: 0;
      padding: 0;
  }
`;

export default GlobalStyle;
