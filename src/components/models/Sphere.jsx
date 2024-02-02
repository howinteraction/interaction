import PropTypes from "prop-types";

export default function Sphere({ position, args }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

Sphere.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
