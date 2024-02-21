import PropTypes from "prop-types";

export default function Box({ args, color }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Box.propTypes = {
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
