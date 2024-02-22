import { useSelector } from "react-redux";

import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function StageThreeHayStack() {
  const { scene } = useGLTF("/assets/glb/haystack.glb");
  const isThreeIllusion = useSelector(
    (state) => state.threeIllusion.is3DObject,
  );

  scene.traverse((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  if (isThreeIllusion) {
    return (
      <RigidBody
        colliders="hull"
        scale={2}
        position={[17, -12, -30]}
        userData={{ isDraggable: true }}
      >
        <primitive object={scene} />
      </RigidBody>
    );
  }

  return null;
}
