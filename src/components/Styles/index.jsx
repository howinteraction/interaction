import styled, { keyframes } from "styled-components";

export const Aim = styled.div`
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

export const Modal = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")};
  position: fixed;
  text-align: center;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 500px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  color: #03e9f4;
  font-size: 16px;
  display: block;
  width: 60%;
  padding: 12px 20px;
  margin: 8px auto 20px;
  background-color: transparent;
  box-sizing: border-box;
  border: 2px solid ${({ $isError }) => ($isError ? "#f44336" : "#ccc")};
  border-radius: 4px;
  &:focus {
    border-color: ${({ $isError }) => ($isError ? "#f44336" : "#4CAF50")};
  }
  ${({ $isError }) =>
    $isError &&
    `
    background-color: rgba(0, 0, 0, 1);
  `}
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  cursor: pointer;
  background-color: transparent;
  border-image: linear-gradient(90deg, transparent, #03e9f4, transparent) 1;
  border: 1px solid transparent;

  &:hover {
    background-image: linear-gradient(
      45deg,
      rgba(3, 233, 244, 0.3),
      rgba(3, 233, 244, 0.7)
    );
    box-shadow: 0 0 15px #03e9f4;
    border-image: none;
  }
`;

export const move = keyframes`
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;

export const Light = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: ${move} 1s linear infinite;
`;
