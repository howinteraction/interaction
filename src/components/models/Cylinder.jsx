import PropTypes from "prop-types";

export default function Cylinder({ position, args, color }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Cylinder.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
}.isRequired;
