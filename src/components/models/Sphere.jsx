import PropTypes from "prop-types";

export default function Sphere({ args, color, ...dragProps }) {
  return (
    <mesh {...dragProps} castShadow receiveShadow>
      <sphereGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Sphere.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
