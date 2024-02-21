import PropTypes from "prop-types";

export default function Plane({ position, args, color, rotateX, rotateY }) {
  return (
    <mesh position={position} rotation-x={rotateX} rotation-y={rotateY}>
      <planeGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

Plane.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  args: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  rotateX: PropTypes.number.isRequired,
  rotateY: PropTypes.number.isRequired,
};
