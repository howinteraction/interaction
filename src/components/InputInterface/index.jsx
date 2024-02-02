import PropTypes from "prop-types";
import { Html } from "@react-three/drei";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function InputInterface({ position, width, height, fontSize }) {
  return (
    <Html position={position} transform occlude>
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
  fontSize: PropTypes.string,
}.isRequired;

InputInterface.defaultProps = {
  position: [0, 16, -3],
  width: "500px",
  height: "100px",
  fontSize: "60px",
};
