import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    margin: 0;
  }

  button {
    outline: none;
    border: none;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    &:visited {
      text-decoration: none;
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
