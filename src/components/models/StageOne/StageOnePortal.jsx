import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import PropTypes from "prop-types";

export default function StageOnePortal({ scale, rotation }) {
  const { scene } = useGLTF("/assets/glb/stage1-portal.glb");

  scene.traverse((child) => {
    child.castShadow = true;
  });

  return (
    <RigidBody
      scale={scale}
      type="fixed"
      rotation={rotation}
      position={[48, 6, 2.5]}
      colliders={false}
    >
      <primitive object={scene} />
    </RigidBody>
  );
}

StageOnePortal.propTypes = {
  scale: PropTypes.number.isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

useGLTF.preload("/assets/glb/stage1-portal.glb");
