import styled, { createGlobalStyle } from "styled-components";
import Stages from "./components/Stages/Stages";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root, #container {
    height: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Aim = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 2px solid white;
  z-index: 2;
`;

function App() {
  return (
    <Container id="container">
      <GlobalStyle />
      <Stages />
    </Container>
  );
}

export default App;
