import { useSelector } from "react-redux";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function StageThreeBridge() {
  const { scene } = useGLTF("/assets/glb/stage3-bridge.glb");
  const isBridgeIllusion = useSelector(
    (state) => state.threeIllusion.is3DBridge,
  );

  scene.traverse((child) => {
    child.receiveShadow = true;
    child.castShadow = true;
  });

  if (isBridgeIllusion) {
    return (
      <RigidBody
        colliders="hull"
        type="fixed"
        scale={1}
        position={[77, 33, -17.7]}
        rotation={[3.1, 25, 28]}
      >
        <primitive object={scene} />
      </RigidBody>
    );
  }

  return null;
}
