import PropTypes from "prop-types";

export default function Torus({ position, args, color }) {
  return (
    <mesh position={position}>
      <torusGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Torus.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
