import styled, { createGlobalStyle } from "styled-components";
import Main from "./Main";

const GlobalStyle = createGlobalStyle`
  html, body { overflow-x: hidden }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }
`;

const Attr = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      <Attr>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/PnPonPond/Todo-app">PonPond</a>.
      </Attr>
    </div>
  );
}

export default App;
