import PropTypes from "prop-types";

export default function Cylinder({ position, args }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
}

Cylinder.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
