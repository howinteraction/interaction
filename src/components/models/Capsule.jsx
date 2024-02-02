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
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
}.isRequired;
