import PropTypes from "prop-types";

export default function Capsule({ position, args, color }) {
  return (
    <mesh position={position}>
      <capsuleGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Capsule.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
