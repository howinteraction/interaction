import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import styled, { createGlobalStyle } from "styled-components";

import Tutorial from "./components/Tutorial";
import Stopwatch from "./components/Stopwatch";
import Subtitle from "./components/Subtitle";

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
  const [isShow, setIsShow] = useState(true);

  return (
    <Container id="container">
      <GlobalStyle />
      {isShow ? (
        <Canvas
          camera={{ near: 0.1, far: 1000, position: [0, 7, 23], fov: 80 }}
        >
          <Tutorial />
          <Stopwatch />
          <Subtitle />
        </Canvas>
      ) : (
        <Stopwatch />
      )}
    </Container>
  );
}

export default App;
