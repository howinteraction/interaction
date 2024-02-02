import PropTypes from "prop-types";

export default function Box({ position, args, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Box.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
}.isRequired;
