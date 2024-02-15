import PropTypes from "prop-types";

export default function Capsule({ args, color }) {
  return (
    <mesh castShadow receiveShadow>
      <capsuleGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Capsule.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
