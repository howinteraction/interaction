import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import movementImage from "../../../../../../../assets/images/tutorial-picture/movement.png";
import logo from "../../../../../../../assets/images/tutorial-picture/logo-removebg.png";

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 50%;
  align-self: center;
`;

const StageText = styled.div`
  width: 50%;
  align-self: center;
  font-size: 30px;
  margin-left: 37px;
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 16px;
  display: flex;
  align-items: center;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled.img`
  width: 100px;
  animation: ${rotateAnimation} 1s infinite linear;
`;

export default function StageTwoLoading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 5 ? `${prevDots}.` : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      <StageText>
        <h2>Stage2</h2>
        <br></br>
        <p>
          This is stage2. You need to match the torn objects to clear this
          stage. Keep going!
        </p>
      </StageText>
      <StyledImage src={movementImage} alt="Keyboard Movement" />
      <LoadingText>
        <h2>
          <RotatingLogo src={logo} alt="Logo" />
          Loading {dots}
        </h2>
      </LoadingText>
    </LoadingContainer>
  );
}
