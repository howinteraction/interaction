import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";

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

export default function Loading() {
  const currentStage = useSelector((state) => state.stages.stageLevel);
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
        {currentStage === 0 && (
          <>
            <h2>Tutorial</h2>
            <br />
            <p>
              This is Tutorial. You can move around with the keyboard, and
              control the viewpoint with the mouse.
            </p>
          </>
        )}
        {currentStage === 1 && (
          <>
            <h2>Stage1</h2>
            <br />
            <p>
              This is Stage1. You have to clear this stage with perspective.
              Keep going!
              <br />
              <br />
              Tip: Blue Box is suspicious...
            </p>
          </>
        )}
        {currentStage === 2 && (
          <>
            <h2>Stage2</h2>
            <br />
            <p>
              This is stage2. You have to aim at the torn objects and match it
              to clear this stage. Keep going!
              <br />
              <br />
              Tip: Blue Triangle is suspicious...
            </p>
          </>
        )}
        {currentStage === 3 && (
          <>
            <h2>Stage3</h2>
            <br />
            <p>
              This is stage3. You have to turn a 2D photos into a 3D Object by
              grabbing and dropping it to clear this stage. Keep going!
              <br />
              <br />
              Tip: HayStack and Bridge is suspicious...
            </p>
          </>
        )}
      </StageText>
      <StyledImage
        src="/assets/images/tutorial-picture/movement.png"
        alt="Keyboard Movement"
      />
      <LoadingText>
        <h2>
          <RotatingLogo
            src="/assets/images/tutorial-picture/logo-removebg.png"
            alt="Logo"
          />
          Loading {dots}
        </h2>
      </LoadingText>
    </LoadingContainer>
  );
}
