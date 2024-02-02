import PropTypes from "prop-types";

export default function Box({ position, args }) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
}

Box.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
