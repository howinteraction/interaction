import { Html } from "@react-three/drei";

import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 30px;
`;

export default function InputInterface({
  position,
  width,
  height,
  rotation,
  fontSize,
  errorMessage,
  onChange,
}) {
  return (
    <Html position={position} rotation={rotation} transform occlude>
      <InputContainer>
        <input
          type="text"
          id="player"
          placeholder="player name"
          style={{
            width,
            height,
            marginBottom: "5px",
            borderRadius: "20px",
            fontSize,
          }}
          onChange={e => onChange(e.target.value)}
        />
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Html>
  );
}

InputInterface.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  fontSize: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
