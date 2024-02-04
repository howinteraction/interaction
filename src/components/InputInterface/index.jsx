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
  position: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.string,
  height: PropTypes.string,
  rotation: PropTypes.arrayOf(PropTypes.number),
  fontSize: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

InputInterface.defaultProps = {
  position: [10, 16, 10],
  width: "500px",
  height: "150px",
  rotation: [0.6, 0.75, -0.42],
  fontSize: "80px",
  errorMessage: "",
  onChange: () => {},
};
