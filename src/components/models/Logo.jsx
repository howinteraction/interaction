import { useLoader } from "@react-three/fiber";

import * as THREE from "three";
import PropTypes from "prop-types";

export default function Logo({ position, scale, rotation }) {
  const logoTexture = useLoader(
    THREE.TextureLoader,
    "/assets/images/tutorial-picture/logo-removebg.png",
  );

  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <planeGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={logoTexture}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

Logo.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
}.isRequired;

Logo.defaultProps = {
  position: [10, 25, 10],
  scale: [25, 15, 0],
  rotation: [0.7, 0.7, -0.5],
};
