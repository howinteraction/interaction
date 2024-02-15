import PropTypes from "prop-types";

export default function Cylinder({ args, color }) {
  return (
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Cylinder.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
