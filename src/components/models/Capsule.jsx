import PropTypes from "prop-types";

export default function Capsule({ position, args }) {
  return (
    <mesh position={position}>
      <capsuleGeometry args={args} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  );
}

Capsule.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
