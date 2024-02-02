import PropTypes from "prop-types";

export default function Torus({ position, args }) {
  return (
    <mesh position={position}>
      <torusGeometry args={args} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

Torus.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  args: PropTypes.arrayOf(PropTypes.number),
}.isRequired;
