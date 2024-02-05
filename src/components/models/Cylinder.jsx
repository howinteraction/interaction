import PropTypes from "prop-types";

export default function Cylinder({ position, args, color }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Cylinder.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
