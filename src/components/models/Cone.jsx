import PropTypes from "prop-types";

export default function Cone({ position, args, color }) {
  return (
    <mesh position={position}>
      <coneGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Cone.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
