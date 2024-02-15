import PropTypes from "prop-types";

export default function Cone({ args, color }) {
  return (
    <mesh castShadow receiveShadow>
      <coneGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Cone.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
