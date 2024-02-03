import { Html } from "@react-three/drei";

import PropTypes from "prop-types";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function InputInterface({
  position,
  width,
  height,
  rotation,
  fontSize,
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
        />
      </InputContainer>
    </Html>
  );
}

InputInterface.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.string,
  height: PropTypes.string,
  rotation: PropTypes.arrayOf(PropTypes.number),
  fontSize: PropTypes.string,
}.isRequired;

InputInterface.defaultProps = {
  position: [10, 16, 10],
  width: "500px",
  height: "150px",
  rotation: [0.6, 0.75, -0.42],
  fontSize: "80px",
};
