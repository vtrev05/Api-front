import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  /* html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  a,
  code,
  em,
  img,
  small,
  strong,
  sub,
  sup,
  b,
  u,
  i,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  main,
  canvas,
  embed,
  footer,
  header,
  nav,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
  }

  footer,
  header,
  nav,
  main {
    display: block;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    -webkit-appearance: none;
    border-radius: 0;
  }
  /* Globals */
  html {
    margin: 0;
    padding: 0;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.text};
    *::-webkit-scrollbar {
      width: 4px;
    }
    *::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.red};
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.text};
      border-radius: 20px;
    }
  } 
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    a, i {
      color: ${({ theme }) => theme.text}; 
    }
  }
`;

export default GlobalStyles;