import PropTypes from "prop-types";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export default function Logo({ position, scale, rotation }) {
  const logoTexture = useLoader(
    THREE.TextureLoader,
    "/assets/images/stage3-picture/logo-removebg.png",
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
