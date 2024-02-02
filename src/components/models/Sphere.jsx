import PropTypes from "prop-types";

export default function Sphere({ position, args, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Sphere.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
}.isRequired;
