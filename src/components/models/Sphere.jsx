import PropTypes from "prop-types";

export default function Sphere({ position, args, color, ...dragProps }) {
  return (
    <mesh position={position} {...dragProps}>
      <sphereGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Sphere.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
