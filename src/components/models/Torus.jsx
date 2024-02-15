import PropTypes from "prop-types";

export default function Torus({ args, color }) {
  return (
    <mesh castShadow receiveShadow>
      <torusGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Torus.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
