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

function App() {
  return (
    <Container id="container">
      <GlobalStyle />
      <Stages />
    </Container>
  );
}

export default App;
