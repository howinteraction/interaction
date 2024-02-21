import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import PropTypes from "prop-types";

import * as THREE from "three";

export default function Logo({ position, scale, rotation }) {
  const logoTexture = useLoader(
    THREE.TextureLoader,
    "/assets/images/tutorial-picture/logo-removebg.png",
  );
  const logoRef = useRef();

  useFrame(() => {
    logoRef.current.rotation.x += 0.005;
    logoRef.current.rotation.y += 0.005;
    logoRef.current.rotation.z += 0.005;
  });

  return (
    <mesh position={position} scale={scale} rotation={rotation} ref={logoRef}>
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
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};
