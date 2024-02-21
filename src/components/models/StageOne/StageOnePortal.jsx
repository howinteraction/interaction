import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import PropTypes from "prop-types";

export default function StageOnePortal({ scale, rotation }) {
  const gltf = useGLTF("/assets/glb/stage1-portal.glb");

  gltf.scene.traverse((child) => {
    child.castShadow = true;
  });

  return (
    <RigidBody
      scale={scale}
      type="fixed"
      rotation={rotation}
      position={[-19.5, 6, 0]}
      colliders={false}
    >
      <primitive object={gltf.scene} />
      <CuboidCollider args={[2, 0.5, 2]} position={[1.5, 0, 0]} />
    </RigidBody>
  );
}

StageOnePortal.propTypes = {
  scale: PropTypes.number.isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

useGLTF.preload("/assets/glb/stage1-portal.glb");
