import { createGlobalStyle } from "styled-components";
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
function App() {
  return (
    <div>
      <GlobalStyle />
      <Main />
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">PonPond</a>.
      </div> */}
    </div>
  );
}

export default App;
